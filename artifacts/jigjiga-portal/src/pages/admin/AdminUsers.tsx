import React, { useState, useEffect } from "react";
import { getUsers, saveUser, deleteUser, AdminUser, generateId, UserRole } from "@/lib/adminStore";
import { Plus, Trash2, Search, Users, ShieldCheck, Shield, User, X, Eye, EyeOff } from "lucide-react";

const ROLE_META: Record<UserRole, { label: string; color: string; icon: typeof Shield; desc: string }> = {
  moderator: {
    label: "Moderator",
    color: "bg-blue-100 text-blue-700",
    icon: ShieldCheck,
    desc: "Can review and moderate content submissions",
  },
  supporter: {
    label: "Supporter",
    color: "bg-purple-100 text-purple-700",
    icon: User,
    desc: "Assists with community queries and basic tasks",
  },
};

export default function AdminUsers() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "moderator" as UserRole });
  const [showPassword, setShowPassword] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and email are required.");
      return;
    }
    if (!form.password.trim() || form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (users.some((u) => u.email.toLowerCase() === form.email.toLowerCase())) {
      setError("A user with this email already exists.");
      return;
    }
    setSaving(true);
    setTimeout(() => {
      const user: AdminUser = {
        id: generateId(),
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
        role: form.role,
        createdAt: new Date().toISOString(),
        status: "active",
      };
      saveUser(user);
      setUsers(getUsers());
      setShowModal(false);
      setForm({ name: "", email: "", password: "", role: "moderator" });
      setShowPassword(false);
      setSaving(false);
    }, 500);
  }

  function handleDelete(id: string) {
    if (!confirm("Remove this user?")) return;
    deleteUser(id);
    setUsers(getUsers());
  }

  function toggleStatus(user: AdminUser) {
    const updated: AdminUser = { ...user, status: user.status === "active" ? "suspended" : "active" };
    saveUser(updated);
    setUsers(getUsers());
  }

  const filtered = users.filter(
    (u) => u.name.toLowerCase().includes(query.toLowerCase()) || u.email.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-black text-gray-900 sm:text-3xl">User Management</h1>
          <p className="mt-1 text-sm text-gray-500">Add moderators and supporters to help manage the portal</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-primary/25 transition-colors hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" /> Add User
        </button>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:grid-cols-2">
        {(Object.entries(ROLE_META) as [UserRole, (typeof ROLE_META)[UserRole]][]).map(([role, meta]) => {
          const Icon = meta.icon;
          const count = users.filter((u) => u.role === role).length;
          return (
            <div key={role} className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${meta.color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <p className="text-base font-black text-gray-900">
                  {count} {meta.label}
                  {count !== 1 ? "s" : ""}
                </p>
                <p className="mt-0.5 text-xs text-gray-400">{meta.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mb-5">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search users…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm font-medium transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <Users className="mx-auto mb-4 h-12 w-12 text-gray-200" />
            <p className="font-semibold text-gray-400">{query ? "No users match your search" : "No team members yet"}</p>
            {!query && (
              <button onClick={() => setShowModal(true)} className="mt-2 text-sm font-bold text-primary hover:underline">
                Add your first user →
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="hidden grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 border-b border-gray-100 px-6 py-3 text-xs font-black uppercase tracking-wider text-gray-400 sm:grid">
              <span>User</span>
              <span>Role</span>
              <span>Added</span>
              <span>Status</span>
              <span>Actions</span>
            </div>
            <div className="divide-y divide-gray-50">
              {filtered.map((user) => {
                const meta = ROLE_META[user.role];
                const Icon = meta.icon;
                return (
                  <div key={user.id}>
                    <div className="block p-4 sm:hidden">
                      <div className="rounded-2xl border border-gray-100 bg-gray-50/40 p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                            <Icon className="h-4 w-4 text-gray-500" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-bold text-gray-900">{user.name}</p>
                            <p className="truncate text-xs text-gray-400">{user.email}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <span className={`rounded-full px-2.5 py-1 text-xs font-black ${meta.color}`}>{meta.label}</span>
                              <button
                                onClick={() => toggleStatus(user)}
                                className={`rounded-full px-2.5 py-1 text-xs font-black transition-colors ${
                                  user.status === "active"
                                    ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                                    : "bg-red-100 text-red-600 hover:bg-red-200"
                                }`}
                              >
                                {user.status === "active" ? "Active" : "Suspended"}
                              </button>
                            </div>
                            <p className="mt-2 text-xs text-gray-400">Added {new Date(user.createdAt).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <button
                            onClick={() => toggleStatus(user)}
                            className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-100"
                          >
                            {user.status === "active" ? "Suspend" : "Activate"}
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-bold text-red-600 transition-colors hover:bg-red-100"
                          >
                            <Trash2 className="h-4 w-4" /> Delete
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="hidden items-center gap-4 px-6 py-4 sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto]">
                      <div className="flex min-w-0 flex-1 items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
                          <Icon className="h-4 w-4 text-gray-500" />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-gray-900">{user.name}</p>
                          <p className="truncate text-xs text-gray-400">{user.email}</p>
                        </div>
                      </div>
                      <div>
                        <span className={`rounded-full px-2.5 py-1 text-xs font-black ${meta.color}`}>{meta.label}</span>
                      </div>
                      <span className="text-xs text-gray-400">{new Date(user.createdAt).toLocaleDateString()}</span>
                      <div>
                        <button
                          onClick={() => toggleStatus(user)}
                          className={`rounded-full px-2.5 py-1 text-xs font-black transition-colors ${
                            user.status === "active"
                              ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                              : "bg-red-100 text-red-600 hover:bg-red-200"
                          }`}
                        >
                          {user.status === "active" ? "Active" : "Suspended"}
                        </button>
                      </div>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <h2 className="text-xl font-black text-gray-900">Add Team Member</h2>
              <button onClick={() => setShowModal(false)} className="rounded-xl p-2 text-gray-400 transition-colors hover:bg-gray-100">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-wider text-gray-500">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ahmed Hassan"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-wider text-gray-500">Email Address</label>
                <input
                  type="email"
                  placeholder="user@jigjiga.net"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-wider text-gray-500">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 6 characters"
                    value={form.password}
                    onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-11 text-sm font-medium transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <p className="mt-1.5 text-xs text-gray-400">They will use this password to log in.</p>
              </div>
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-wider text-gray-500">Role</label>
                <div className="space-y-2">
                  {(Object.entries(ROLE_META) as [UserRole, (typeof ROLE_META)[UserRole]][]).map(([role, meta]) => (
                    <label
                      key={role}
                      className={`flex items-start gap-3 rounded-xl border-2 p-3 transition-colors ${
                        form.role === role ? "border-primary bg-primary/5" : "border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={form.role === role}
                        onChange={() => setForm((f) => ({ ...f, role }))}
                        className="mt-0.5 accent-primary"
                      />
                      <div>
                        <p className="text-sm font-bold text-gray-900">{meta.label}</p>
                        <p className="text-xs text-gray-400">{meta.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">{error}</p>}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 rounded-xl bg-primary py-3 text-sm font-black text-white shadow-lg shadow-primary/25 transition-colors hover:bg-blue-700 disabled:opacity-50"
                >
                  {saving ? "Adding…" : "Add User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
