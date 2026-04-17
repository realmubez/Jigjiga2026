import React, { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { getPosts, savePost, Post, generateId } from "@/lib/adminStore";
import { ArrowLeft, Save, Eye, Image, Type, Tag, AlignLeft } from "lucide-react";

const CATEGORIES = [
  "Infrastructure", "Culture & Events", "Health & Education", "Business",
  "Sports", "Technology", "Community", "Tourism", "Environment", "Security"
];

export default function AdminPostEditor() {
  const [, navigate] = useLocation();
  const [matchEdit, paramsEdit] = useRoute("/admin/posts/edit/:id");
  const postId = matchEdit ? paramsEdit?.id : null;

  const [form, setForm] = useState<Omit<Post, "id" | "createdAt" | "updatedAt" | "author">>({
    title: "",
    category: CATEGORIES[0],
    excerpt: "",
    body: "",
    imageUrl: "https://picsum.photos/seed/newpost/800/450",
    status: "draft",
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (postId) {
      const posts = getPosts();
      const existing = posts.find(p => p.id === postId);
      if (existing) {
        const { id, createdAt, updatedAt, author, ...rest } = existing;
        setForm(rest);
      }
    }
  }, [postId]);

  function update(field: keyof typeof form, value: string) {
    setForm(f => ({ ...f, [field]: value }));
    setSaved(false);
  }

  function handleSave(status: "published" | "draft") {
    if (!form.title.trim() || !form.body.trim()) {
      alert("Title and body are required.");
      return;
    }
    setSaving(true);
    setTimeout(() => {
      const existing = postId ? getPosts().find(p => p.id === postId) : null;
      const post: Post = {
        id: postId || generateId(),
        ...form,
        status,
        createdAt: existing?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        author: "Admin",
      };
      savePost(post);
      setSaving(false);
      setSaved(true);
      navigate("/admin/posts");
    }, 500);
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate("/admin/posts")}
          className="p-2 rounded-xl text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-black text-gray-900">{postId ? "Edit Post" : "New Post"}</h1>
          <p className="text-gray-400 text-sm">{postId ? "Update existing post" : "Create a new update for the homepage"}</p>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <button onClick={() => handleSave("draft")} disabled={saving}
            className="px-4 py-2 border border-gray-200 text-gray-600 font-bold text-sm rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50">
            Save Draft
          </button>
          <button onClick={() => handleSave("published")} disabled={saving}
            className="flex items-center gap-2 px-5 py-2 bg-primary text-white font-black text-sm rounded-xl shadow-lg shadow-primary/25 hover:bg-blue-700 transition-colors disabled:opacity-50">
            <Save className="w-4 h-4" />
            {saving ? "Publishing…" : "Publish"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <label className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-wider mb-3">
              <Type className="w-3.5 h-3.5" /> Title
            </label>
            <input type="text" placeholder="Post title…" value={form.title}
              onChange={e => update("title", e.target.value)}
              className="w-full text-xl font-black text-gray-900 border-none outline-none placeholder:text-gray-300 resize-none bg-transparent"
            />
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <label className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-wider mb-3">
              <AlignLeft className="w-3.5 h-3.5" /> Excerpt
              <span className="text-gray-300 font-medium normal-case tracking-normal">· Short summary shown on homepage</span>
            </label>
            <textarea rows={3} placeholder="A short, compelling summary…" value={form.excerpt}
              onChange={e => update("excerpt", e.target.value)}
              className="w-full text-sm text-gray-700 border border-gray-100 rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none font-medium leading-relaxed"
            />
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <label className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-wider mb-3">
              <AlignLeft className="w-3.5 h-3.5" /> Body Content
            </label>
            <textarea rows={14} placeholder="Write the full article here…" value={form.body}
              onChange={e => update("body", e.target.value)}
              className="w-full text-sm text-gray-700 border border-gray-100 rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none font-medium leading-relaxed"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <label className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-wider mb-3">
              <Tag className="w-3.5 h-3.5" /> Category
            </label>
            <select value={form.category} onChange={e => update("category", e.target.value)}
              className="w-full py-2.5 px-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <label className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-wider mb-3">
              <Image className="w-3.5 h-3.5" /> Cover Image URL
            </label>
            <input type="url" value={form.imageUrl} onChange={e => update("imageUrl", e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-xs font-medium text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
            {form.imageUrl && (
              <img src={form.imageUrl} alt="Preview" className="mt-3 w-full h-36 object-cover rounded-xl bg-gray-100" />
            )}
            <p className="text-xs text-gray-400 mt-2">Use a picsum or direct image URL</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs font-black text-gray-500 uppercase tracking-wider mb-3">Status</p>
            <div className="space-y-2">
              {(["draft", "published"] as const).map(s => (
                <label key={s} className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="status" value={s} checked={form.status === s}
                    onChange={() => update("status", s)}
                    className="accent-primary w-4 h-4"
                  />
                  <span className="text-sm font-semibold text-gray-700 capitalize">{s === "published" ? "Published (Live)" : "Draft (Hidden)"}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
