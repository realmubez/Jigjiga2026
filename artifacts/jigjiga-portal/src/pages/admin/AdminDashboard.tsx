import React from "react";
import { Link } from "wouter";
import { getPosts, getUsers } from "@/lib/adminStore";
import { FileText, Users, Eye, TrendingUp, Plus, ArrowRight, Globe, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
  const posts = getPosts();
  const users = getUsers();
  const publishedPosts = posts.filter((p) => p.status === "published").length;
  const draftPosts = posts.filter((p) => p.status === "draft").length;

  const stats = [
    { label: "Total Posts", value: posts.length.toString(), icon: FileText, light: "bg-blue-50 text-blue-600" },
    { label: "Published", value: publishedPosts.toString(), icon: CheckCircle, light: "bg-emerald-50 text-emerald-600" },
    { label: "Drafts", value: draftPosts.toString(), icon: Eye, light: "bg-amber-50 text-amber-600" },
    { label: "Team Members", value: users.length.toString(), icon: Users, light: "bg-purple-50 text-purple-600" },
  ];

  const recentPosts = posts.slice(0, 5);

  return (
    <div>
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-black text-gray-900 sm:text-3xl">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back, Admin — here&apos;s what&apos;s happening on Jigjiga.net</p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:mb-8 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, light }) => (
          <div key={label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${light}`}>
              <Icon className="h-5 w-5" />
            </div>
            <p className="break-words text-2xl font-black text-gray-900">{value}</p>
            <p className="mt-0.5 text-xs font-semibold text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mb-8 xl:grid-cols-3">
        <Link
          href="/admin/posts/new"
          className="group flex items-center gap-3 rounded-2xl bg-primary p-5 text-white shadow-lg shadow-primary/25 transition-colors hover:bg-blue-700"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
            <Plus className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-black">New Post</p>
            <p className="text-xs text-blue-200">Publish a latest update</p>
          </div>
          <ArrowRight className="ml-auto h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link
          href="/admin/users"
          className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:shadow-md"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
            <Users className="h-5 w-5 text-purple-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-black text-gray-900">Manage Users</p>
            <p className="text-xs text-gray-400">Add moderators & supporters</p>
          </div>
          <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-gray-300 transition-transform group-hover:translate-x-1" />
        </Link>

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:shadow-md md:col-span-2 xl:col-span-1"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
            <Globe className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-black text-gray-900">View Live Site</p>
            <p className="text-xs text-gray-400">Open Jigjiga.net</p>
          </div>
          <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-gray-300 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex flex-col gap-2 border-b border-gray-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <h2 className="font-black text-gray-900">Recent Posts</h2>
          <Link href="/admin/posts" className="flex items-center gap-1 text-sm font-bold text-primary hover:underline">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        {recentPosts.length === 0 ? (
          <div className="p-8 text-center">
            <FileText className="mx-auto mb-3 h-10 w-10 text-gray-200" />
            <p className="text-sm font-semibold text-gray-400">No posts yet</p>
            <Link href="/admin/posts/new" className="mt-2 inline-block text-sm font-bold text-primary hover:underline">
              Create your first post →
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {recentPosts.map((post) => (
              <div key={post.id} className="px-4 py-4 transition-colors hover:bg-gray-50/50 sm:px-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <img src={post.imageUrl} alt={post.title} className="h-12 w-12 shrink-0 rounded-xl bg-gray-100 object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="break-words text-sm font-bold text-gray-900">{post.title}</p>
                    <p className="mt-0.5 text-xs text-gray-400">{post.category} · {new Date(post.createdAt).toLocaleDateString()}</p>
                    <span
                      className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-black ${
                        post.status === "published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {post.status === "published" ? "Live" : "Draft"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#0f1f4b] to-[#2563eb] p-5 text-white sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <h3 className="mb-1 text-base font-black">Official Jigjiga City Portal</h3>
            <p className="text-sm leading-relaxed text-blue-200">
              Jigjiga.net is the official digital gateway for the city of Jigjiga — serving residents, visitors,
              small businesses, and developers across the Somali Region and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}