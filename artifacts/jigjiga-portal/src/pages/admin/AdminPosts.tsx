import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { getPosts, deletePost, Post } from "@/lib/adminStore";
import { Plus, Search, Trash2, Edit, FileText } from "lucide-react";

type Filter = "all" | "published" | "draft";

export default function AdminPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  function handleDelete(id: string) {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    setDeleting(id);
    setTimeout(() => {
      deletePost(id);
      setPosts(getPosts());
      setDeleting(null);
    }, 400);
  }

  const filtered = posts.filter((p) => {
    const matchQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase());
    const matchFilter = filter === "all" || p.status === filter;
    return matchQuery && matchFilter;
  });

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-black text-gray-900 sm:text-3xl">Latest Updates</h1>
          <p className="mt-1 text-sm text-gray-500">Manage news posts and announcements for the homepage</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-primary/25 transition-colors hover:bg-blue-700 sm:justify-start"
        >
          <Plus className="h-4 w-4" /> New Post
        </Link>
      </div>

      <div className="mb-6 flex flex-col gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm font-medium transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex flex-wrap gap-2 rounded-xl bg-gray-100 p-1.5">
          {(["all", "published", "draft"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-lg px-4 py-2 text-xs font-black capitalize transition-colors ${
                filter === f ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-gray-200" />
            <p className="font-semibold text-gray-400">No posts found</p>
            <Link href="/admin/posts/new" className="mt-2 inline-block text-sm font-bold text-primary hover:underline">
              Create your first post →
            </Link>
          </div>
        ) : (
          <>
            <div className="hidden grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 border-b border-gray-100 px-6 py-3 text-xs font-black uppercase tracking-wider text-gray-400 sm:grid">
              <span>Post</span>
              <span>Category</span>
              <span>Date</span>
              <span>Status</span>
              <span>Actions</span>
            </div>

            <div className="divide-y divide-gray-50">
              {filtered.map((post) => (
                <div key={post.id} className={`transition-opacity ${deleting === post.id ? "opacity-40" : ""}`}>
                  <div className="block p-4 sm:hidden">
                    <div className="rounded-2xl border border-gray-100 bg-gray-50/40 p-4">
                      <div className="flex items-start gap-3">
                        <img src={post.imageUrl} alt="" className="h-12 w-12 shrink-0 rounded-xl bg-gray-100 object-cover" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold text-gray-900">{post.title}</p>
                          <p className="mt-1 text-xs text-gray-500">{post.category}</p>
                          <p className="mt-1 text-xs text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</p>
                          <span
                            className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-black ${
                              post.status === "published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {post.status === "published" ? "Live" : "Draft"}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Link
                          href={`/admin/posts/edit/${post.id}`}
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-100"
                        >
                          <Edit className="h-4 w-4" /> Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-bold text-red-600 transition-colors hover:bg-red-100"
                        >
                          <Trash2 className="h-4 w-4" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="hidden items-center gap-4 px-6 py-4 sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto]">
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <img src={post.imageUrl} alt="" className="h-10 w-10 shrink-0 rounded-lg bg-gray-100 object-cover" />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-gray-900">{post.title}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">{post.category}</span>
                    <span className="text-sm text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</span>
                    <div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-black ${
                          post.status === "published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {post.status === "published" ? "Live" : "Draft"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <Link
                        href={`/admin/posts/edit/${post.id}`}
                        className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
