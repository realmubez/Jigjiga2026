import React, { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { getPosts, savePost, Post, generateId } from "@/lib/adminStore";
import { ArrowLeft, Save, Image, Type, Tag, AlignLeft } from "lucide-react";

const CATEGORIES = [
  "Infrastructure",
  "Culture & Events",
  "Health & Education",
  "Business",
  "Sports",
  "Technology",
  "Community",
  "Tourism",
  "Environment",
  "Security",
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

  useEffect(() => {
    if (postId) {
      const posts = getPosts();
      const existing = posts.find((p) => p.id === postId);
      if (existing) {
        const { id, createdAt, updatedAt, author, ...rest } = existing;
        setForm(rest);
      }
    }
  }, [postId]);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSave(status: "published" | "draft") {
    if (!form.title.trim() || !form.body.trim()) {
      alert("Title and body are required.");
      return;
    }
    setSaving(true);
    setTimeout(() => {
      const existing = postId ? getPosts().find((p) => p.id === postId) : null;
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
      navigate("/admin/posts");
    }, 500);
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:mb-8">
        <div className="flex items-start gap-3 sm:gap-4">
          <button
            onClick={() => navigate("/admin/posts")}
            className="rounded-xl p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <h1 className="text-2xl font-black text-gray-900">{postId ? "Edit Post" : "New Post"}</h1>
            <p className="text-sm text-gray-400">{postId ? "Update existing post" : "Create a new update for the homepage"}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={() => handleSave("draft")}
            disabled={saving}
            className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-50"
          >
            Save Draft
          </button>
          <button
            onClick={() => handleSave("published")}
            disabled={saving}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-primary/25 transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {saving ? "Publishing…" : "Publish"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
            <label className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-500">
              <Type className="h-3.5 w-3.5" /> Title
            </label>
            <input
              type="text"
              placeholder="Post title…"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              className="w-full bg-transparent text-lg font-black text-gray-900 outline-none placeholder:text-gray-300 sm:text-xl"
            />
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
            <label className="mb-3 flex flex-col gap-1 text-xs font-black uppercase tracking-wider text-gray-500 sm:flex-row sm:items-center sm:gap-2">
              <span className="flex items-center gap-2">
                <AlignLeft className="h-3.5 w-3.5" /> Excerpt
              </span>
              <span className="normal-case tracking-normal text-gray-300">Short summary shown on homepage</span>
            </label>
            <textarea
              rows={3}
              placeholder="A short, compelling summary…"
              value={form.excerpt}
              onChange={(e) => update("excerpt", e.target.value)}
              className="w-full resize-none rounded-xl border border-gray-100 p-3 text-sm font-medium leading-relaxed text-gray-700 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
            <label className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-500">
              <AlignLeft className="h-3.5 w-3.5" /> Body Content
            </label>
            <textarea
              rows={14}
              placeholder="Write the full article here…"
              value={form.body}
              onChange={(e) => update("body", e.target.value)}
              className="w-full resize-none rounded-xl border border-gray-100 p-4 text-sm font-medium leading-relaxed text-gray-700 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <label className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-500">
              <Tag className="h-3.5 w-3.5" /> Category
            </label>
            <select
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-semibold text-gray-700 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <label className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-500">
              <Image className="h-3.5 w-3.5" /> Cover Image URL
            </label>
            <input
              type="url"
              value={form.imageUrl}
              onChange={(e) => update("imageUrl", e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-xs font-medium text-gray-600 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            {form.imageUrl && <img src={form.imageUrl} alt="Preview" className="mt-3 h-36 w-full rounded-xl bg-gray-100 object-cover" />}
            <p className="mt-2 text-xs text-gray-400">Use a picsum or direct image URL</p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="mb-3 text-xs font-black uppercase tracking-wider text-gray-500">Status</p>
            <div className="space-y-2">
              {(["draft", "published"] as const).map((s) => (
                <label key={s} className="flex items-start gap-3 rounded-xl border border-gray-100 p-3 transition-colors hover:border-gray-200">
                  <input
                    type="radio"
                    name="status"
                    value={s}
                    checked={form.status === s}
                    onChange={() => update("status", s)}
                    className="mt-0.5 h-4 w-4 accent-primary"
                  />
                  <span className="text-sm font-semibold text-gray-700 capitalize">
                    {s === "published" ? "Published (Live)" : "Draft (Hidden)"}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
