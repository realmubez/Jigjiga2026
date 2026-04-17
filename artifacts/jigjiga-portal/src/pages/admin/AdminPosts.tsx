import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { getPosts, deletePost, Post } from "@/lib/adminStore";
import { Plus, Search, Trash2, Edit, Eye, FileText, Filter } from "lucide-react";

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

  const filtered = posts.filter(p => {
    const matchQuery = p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase());
    const matchFilter = filter === "all" || p.status === filter;
    return matchQuery && matchFilter;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Latest Updates</h1>
          <p className="text-gray-500 text-sm mt-1">Manage news posts and announcements for the homepage</p>
        </div>
        <Link href="/admin/posts/new"
          className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-black text-sm shadow-lg shadow-primary/25 hover:bg-blue-700 transition-colors shrink-0">
          <Plus className="w-4 h-4" /> New Post
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text" placeholder="Search posts…" value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div className="flex bg-gray-100 rounded-xl p-1 gap-1 shrink-0">
          {(["all", "published", "draft"] as Filter[]).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-lg text-xs font-black capitalize transition-colors ${
                filter === f ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <FileText className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400 font-semibold">No posts found</p>
            <Link href="/admin/posts/new" className="text-primary text-sm font-bold mt-2 inline-block hover:underline">
              Create your first post →
            </Link>
          </div>
        ) : (
          <>
            <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-3 border-b border-gray-100 text-xs font-black text-gray-400 uppercase tracking-wider">
              <span>Post</span><span>Category</span><span>Date</span><span>Status</span><span>Actions</span>
            </div>
            <div className="divide-y divide-gray-50">
              {filtered.map(post => (
                <div key={post.id}
                  className={`flex sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-4 items-center transition-opacity ${
                    deleting === post.id ? "opacity-40" : ""
                  }`}>
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <img src={post.imageUrl} alt="" className="w-10 h-10 rounded-lg object-cover shrink-0 bg-gray-100" />
                    <div className="min-w-0">
                      <p className="font-bold text-sm text-gray-900 truncate">{post.title}</p>
                      <p className="text-xs text-gray-400 truncate sm:hidden">{post.category} · {new Date(post.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <span className="hidden sm:block text-sm text-gray-500 font-medium">{post.category}</span>
                  <span className="hidden sm:block text-sm text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</span>
                  <div className="hidden sm:block">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-full ${
                      post.status === "published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                    }`}>
                      {post.status === "published" ? "Live" : "Draft"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Link href={`/admin/posts/edit/${post.id}`}
                      className="p-2 rounded-lg text-gray-400 hover:bg-primary/10 hover:text-primary transition-colors">
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button onClick={() => handleDelete(post.id)}
                      className="p-2 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
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
