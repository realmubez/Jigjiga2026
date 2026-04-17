import React from "react";
import { Link } from "wouter";
import { getPosts, getUsers } from "@/lib/adminStore";
import { FileText, Users, Eye, TrendingUp, Plus, ArrowRight, Globe, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
  const posts = getPosts();
  const users = getUsers();
  const publishedPosts = posts.filter(p => p.status === "published").length;
  const draftPosts = posts.filter(p => p.status === "draft").length;

  const stats = [
    { label: "Total Posts", value: posts.length.toString(), icon: FileText, color: "bg-blue-500", light: "bg-blue-50 text-blue-600" },
    { label: "Published", value: publishedPosts.toString(), icon: CheckCircle, color: "bg-emerald-500", light: "bg-emerald-50 text-emerald-600" },
    { label: "Drafts", value: draftPosts.toString(), icon: Eye, color: "bg-amber-500", light: "bg-amber-50 text-amber-600" },
    { label: "Team Members", value: users.length.toString(), icon: Users, color: "bg-purple-500", light: "bg-purple-50 text-purple-600" },
  ];

  const recentPosts = posts.slice(0, 5);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back, Admin — here's what's happening on Jigjiga.net</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, icon: Icon, light }) => (
          <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${light}`}>
              <Icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-black text-gray-900">{value}</p>
            <p className="text-xs text-gray-500 font-semibold mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Link href="/admin/posts/new"
          className="flex items-center gap-3 bg-primary text-white rounded-2xl p-5 hover:bg-blue-700 transition-colors group shadow-lg shadow-primary/25">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            <Plus className="w-5 h-5" />
          </div>
          <div>
            <p className="font-black text-sm">New Post</p>
            <p className="text-blue-200 text-xs">Publish a latest update</p>
          </div>
          <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link href="/admin/users"
          className="flex items-center gap-3 bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-all group">
          <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <p className="font-black text-sm text-gray-900">Manage Users</p>
            <p className="text-gray-400 text-xs">Add moderators & supporters</p>
          </div>
          <ArrowRight className="w-4 h-4 ml-auto text-gray-300 group-hover:translate-x-1 transition-transform" />
        </Link>

        <a href="/" target="_blank"
          className="flex items-center gap-3 bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-all group">
          <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
            <Globe className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <p className="font-black text-sm text-gray-900">View Live Site</p>
            <p className="text-gray-400 text-xs">Open Jigjiga.net</p>
          </div>
          <ArrowRight className="w-4 h-4 ml-auto text-gray-300 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="font-black text-gray-900">Recent Posts</h2>
          <Link href="/admin/posts" className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        {recentPosts.length === 0 ? (
          <div className="p-8 text-center">
            <FileText className="w-10 h-10 text-gray-200 mx-auto mb-3" />
            <p className="text-gray-400 font-semibold text-sm">No posts yet</p>
            <Link href="/admin/posts/new" className="text-primary text-sm font-bold mt-2 inline-block hover:underline">
              Create your first post →
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {recentPosts.map(post => (
              <div key={post.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
                <img src={post.imageUrl} alt={post.title} className="w-12 h-12 rounded-xl object-cover shrink-0 bg-gray-100" />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-gray-900 truncate">{post.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{post.category} · {new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
                <span className={`text-xs font-black px-2.5 py-1 rounded-full shrink-0 ${
                  post.status === "published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                }`}>
                  {post.status === "published" ? "Live" : "Draft"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Site Info */}
      <div className="mt-6 bg-gradient-to-r from-[#0f1f4b] to-[#2563eb] rounded-2xl p-6 text-white">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-black text-base mb-1">Official Jigjiga City Portal</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Jigjiga.net is the official digital gateway for the city of Jigjiga — serving residents, visitors, small businesses, and developers across the Somali Region and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
