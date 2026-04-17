import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import {
  LayoutDashboard, FileText, Users, Settings, LogOut,
  Menu, X, ChevronRight, Bell, ShieldCheck, Globe, Pencil
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
  const displayRole = currentUser?.type === "superadmin" ? "Owner" : (currentUser?.role === "moderator" ? "Moderator" : "Supporter");
  const [location, navigate] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate("/admin/login");
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-5 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
            <Globe className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-white font-black text-sm leading-tight">Jigjiga.net</p>
            <p className="text-blue-300 text-[10px] font-medium">Admin Console</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <p className="text-blue-400/60 text-[10px] font-bold uppercase tracking-wider px-3 mb-3">Main Menu</p>
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = location === href || (href !== "/admin" && location.startsWith(href));
          return (
            <Link key={href} href={href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                active
                  ? "bg-white text-primary shadow-lg shadow-black/10"
                  : "text-blue-100 hover:bg-white/10 hover:text-white"
              }`}>
              <Icon className="w-4 h-4 shrink-0" />
              {label}
              {active && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
            </Link>
          );
        })}

        <div className="mt-6 pt-4 border-t border-white/10">
          <p className="text-blue-400/60 text-[10px] font-bold uppercase tracking-wider px-3 mb-3">Quick Links</p>
          <a href="/" target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-blue-100 hover:bg-white/10 hover:text-white transition-all">
            <Globe className="w-4 h-4 shrink-0" /> View Live Site
          </a>
        </div>
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-3 py-2 mb-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-white text-sm font-bold leading-tight">{displayName}</p>
            <p className="text-blue-300 text-[10px]">{displayRole}</p>
          </div>
        </div>
        <button onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-red-300 hover:bg-red-500/20 hover:text-red-200 transition-all w-full">
          <LogOut className="w-4 h-4 shrink-0" /> Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-gradient-to-b from-[#0f1f4b] to-[#1a3270] shrink-0 fixed top-0 left-0 h-full z-40">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-64 bg-gradient-to-b from-[#0f1f4b] to-[#1a3270]">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden lg:block">
            <p className="text-xs text-gray-400 font-medium">
              {navItems.find(n => location === n.href || (n.href !== "/admin" && location.startsWith(n.href)))?.label || "Admin"}
            </p>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <button className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
              <Bell className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-bold text-gray-900 hidden sm:block">{displayName}</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
