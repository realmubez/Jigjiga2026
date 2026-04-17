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
    if (users.some(u => u.email.toLowerCase() === form.email.toLowerCase())) {
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

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(query.toLowerCase()) ||
    u.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900">User Management</h1>
          <p className="text-gray-500 text-sm mt-1">Add moderators and supporters to help manage the portal</p>
        </div>
        <button onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-black text-sm shadow-lg shadow-primary/25 hover:bg-blue-700 transition-colors shrink-0">
          <Plus className="w-4 h-4" /> Add User
        </button>
      </div>

      {/* Role info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {(Object.entries(ROLE_META) as [UserRole, typeof ROLE_META[UserRole]][]).map(([role, meta]) => {
          const Icon = meta.icon;
          const count = users.filter(u => u.role === role).length;
          return (
            <div key={role} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${meta.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-gray-900 text-base">{count} {meta.label}{count !== 1 ? "s" : ""}</p>
                <p className="text-gray-400 text-xs mt-0.5">{meta.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" placeholder="Search users…" value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <Users className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400 font-semibold">{query ? "No users match your search" : "No team members yet"}</p>
            {!query && (
              <button onClick={() => setShowModal(true)} className="text-primary text-sm font-bold mt-2 hover:underline">
                Add your first user →
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-3 border-b border-gray-100 text-xs font-black text-gray-400 uppercase tracking-wider">
              <span>User</span><span>Role</span><span>Added</span><span>Status</span><span>Actions</span>
            </div>
            <div className="divide-y divide-gray-50">
              {filtered.map(user => {
                const meta = ROLE_META[user.role];
                const Icon = meta.icon;
                return (
                  <div key={user.id} className="flex sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-4 items-center">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-sm text-gray-900 truncate">{user.name}</p>
                        <p className="text-xs text-gray-400 truncate">{user.email}</p>
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <span className={`text-xs font-black px-2.5 py-1 rounded-full ${meta.color}`}>{meta.label}</span>
                    </div>
                    <span className="hidden sm:block text-xs text-gray-400">{new Date(user.createdAt).toLocaleDateString()}</span>
                    <div className="hidden sm:block">
                      <button onClick={() => toggleStatus(user)}
                        className={`text-xs font-black px-2.5 py-1 rounded-full transition-colors ${
                          user.status === "active"
                            ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                            : "bg-red-100 text-red-600 hover:bg-red-200"
                        }`}>
                        {user.status === "active" ? "Active" : "Suspended"}
                      </button>
                    </div>
                    <button onClick={() => handleDelete(user.id)}
                      className="p-2 rounded-lg text-gray-300 hover:bg-red-50 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Add User Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-gray-900">Add Team Member</h2>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-xl text-gray-400 hover:bg-gray-100 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" placeholder="e.g. Ahmed Hassan" value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" placeholder="user@jigjiga.net" value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 6 characters"
                    value={form.password}
                    onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                    required
                    className="w-full px-4 py-3 pr-11 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                  <button type="button" onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-1.5">They will use this password to log in.</p>
              </div>
              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Role</label>
                <div className="space-y-2">
                  {(Object.entries(ROLE_META) as [UserRole, typeof ROLE_META[UserRole]][]).map(([role, meta]) => (
                    <label key={role} className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${
                      form.role === role ? "border-primary bg-primary/5" : "border-gray-100 hover:border-gray-200"
                    }`}>
                      <input type="radio" name="role" value={role} checked={form.role === role}
                        onChange={() => setForm(f => ({ ...f, role }))}
                        className="accent-primary"
                      />
                      <div>
                        <p className="text-sm font-bold text-gray-900">{meta.label}</p>
                        <p className="text-xs text-gray-400">{meta.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {error && <p className="text-sm text-red-600 font-semibold bg-red-50 px-4 py-3 rounded-xl">{error}</p>}
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)}
                  className="flex-1 py-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={saving}
                  className="flex-1 py-3 bg-primary text-white rounded-xl text-sm font-black shadow-lg shadow-primary/25 hover:bg-blue-700 transition-colors disabled:opacity-50">
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
