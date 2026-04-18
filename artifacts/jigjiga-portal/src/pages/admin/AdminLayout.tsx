import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  ChevronRight,
  Bell,
  ShieldCheck,
  Globe,
  Pencil,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Latest Updates", href: "/admin/posts", icon: FileText },
  { label: "Content Manager", href: "/admin/content", icon: Pencil },
  { label: "User Management", href: "/admin/users", icon: Users },
  { label: "Site Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { logout, currentUser } = useAdminAuth();
  const displayName = currentUser?.name ?? "Admin";
  const displayRole =
    currentUser?.type === "superadmin"
      ? "Owner"
      : currentUser?.role === "moderator"
        ? "Moderator"
        : "Supporter";
  const [location, navigate] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  useEffect(() => {
    if (!sidebarOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [sidebarOpen]);

  function handleLogout() {
    logout();
    navigate("/admin/login");
  }

  const currentPageLabel =
    navItems.find((n) => location === n.href || (n.href !== "/admin" && location.startsWith(n.href)))?.label || "Admin";

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <div className="border-b border-white/10 p-5">
        <Link href="/" className="mb-1 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
            <Globe className="h-4 w-4 text-white" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-black leading-tight text-white">Jigjiga.net</p>
            <p className="text-[10px] font-medium text-blue-300">Admin Console</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-wider text-blue-400/60">Main Menu</p>
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = location === href || (href !== "/admin" && location.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                active
                  ? "bg-white text-primary shadow-lg shadow-black/10"
                  : "text-blue-100 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="min-w-0 truncate">{label}</span>
              {active && <ChevronRight className="ml-auto h-3.5 w-3.5 shrink-0" />}
            </Link>
          );
        })}

        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-wider text-blue-400/60">Quick Links</p>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-blue-100 transition-all hover:bg-white/10 hover:text-white"
          >
            <Globe className="h-4 w-4 shrink-0" />
            View Live Site
          </a>
        </div>
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="mb-2 flex items-center gap-3 px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <ShieldCheck className="h-4 w-4 text-white" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold leading-tight text-white">{displayName}</p>
            <p className="text-[10px] text-blue-300">{displayRole}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-red-300 transition-all hover:bg-red-500/20 hover:text-red-200"
        >
          <LogOut className="h-4 w-4 shrink-0" /> Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="fixed left-0 top-0 z-40 hidden h-full w-64 shrink-0 flex-col bg-gradient-to-b from-[#0f1f4b] to-[#1a3270] lg:flex">
        <SidebarContent />
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside
            className="absolute left-0 top-0 h-full w-[85vw] max-w-xs bg-gradient-to-b from-[#0f1f4b] to-[#1a3270] shadow-2xl"
            aria-label="Mobile navigation"
          >
            <SidebarContent />
          </aside>
        </div>
      )}

      <div className="flex min-h-screen flex-1 flex-col lg:ml-64">
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white px-4 py-3 shadow-sm sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-gray-400">Admin Panel</p>
              <p className="truncate text-sm font-bold text-gray-900 sm:text-base">{currentPageLabel}</p>
            </div>

            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <button className="relative rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100">
                <Bell className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2 border-l border-gray-200 pl-2 sm:pl-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                </div>
                <div className="hidden min-w-0 sm:block">
                  <span className="block truncate text-sm font-bold text-gray-900">{displayName}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}