import React from "react";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { useLocation } from "wouter";
import { Globe, Mail, Shield, LogOut, ExternalLink } from "lucide-react";

export default function AdminSettings() {
  const { logout } = useAdminAuth();
  const [, navigate] = useLocation();

  function handleLogout() {
    logout();
    navigate("/admin/login");
  }

  return (
    <div>
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-black text-gray-900 sm:text-3xl">Site Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your admin account and site information</p>
      </div>

      <div className="max-w-3xl space-y-6">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
              <Globe className="h-4 w-4 text-blue-600" />
            </div>
            <h2 className="font-black text-gray-900">Website Info</h2>
          </div>
          <div className="space-y-3 text-sm">
            {[
              ["Domain", "jigjiga.net"],
              ["Type", "Official City Portal"],
              ["Region", "Somali Region, Ethiopia"],
              ["Languages", "English · Soomaali"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`flex flex-col gap-1 py-2 sm:flex-row sm:items-center sm:justify-between ${
                  index < 3 ? "border-b border-gray-50" : ""
                }`}
              >
                <span className="font-semibold text-gray-500">{label}</span>
                <span className="font-bold text-gray-900 sm:text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50">
              <Shield className="h-4 w-4 text-emerald-600" />
            </div>
            <h2 className="font-black text-gray-900">Admin Account</h2>
          </div>
          <div className="space-y-3 text-sm">
            {[
              ["Username", "admin"],
              ["Role", "Owner / Super Admin"],
              ["Password", "••••••••••"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`flex flex-col gap-1 py-2 sm:flex-row sm:items-center sm:justify-between ${
                  index < 2 ? "border-b border-gray-50" : ""
                }`}
              >
                <span className="font-semibold text-gray-500">{label}</span>
                <span className={`font-bold sm:text-right ${label === "Role" ? "text-emerald-600" : "text-gray-900"}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50">
              <Mail className="h-4 w-4 text-orange-500" />
            </div>
            <h2 className="font-black text-gray-900">Contact Details</h2>
          </div>
          <div className="space-y-3 text-sm">
            {[
              ["Email", "info@jigjiga.net"],
              ["Location", "Jigjiga, Ethiopia"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`flex flex-col gap-1 py-2 sm:flex-row sm:items-center sm:justify-between ${
                  index === 0 ? "border-b border-gray-50" : ""
                }`}
              >
                <span className="font-semibold text-gray-500">{label}</span>
                <span className="font-bold text-gray-900 sm:text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50">
              <ExternalLink className="h-4 w-4 text-purple-600" />
            </div>
            <h2 className="font-black text-gray-900">Quick Links</h2>
          </div>
          <div className="space-y-2">
            {[
              { label: "Live Website", href: "/", ext: false },
              { label: "Privacy Policy", href: "/privacy", ext: false },
              { label: "Terms of Service", href: "/terms", ext: false },
              { label: "Business Portal", href: "https://business.jigjiga.net", ext: true },
            ].map(({ label, href, ext }) => (
              <a
                key={label}
                href={href}
                target={ext ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-gray-50"
              >
                <span className="text-sm font-semibold text-gray-700">{label}</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-gray-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-red-100 bg-red-50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-red-700">Sign Out</p>
            <p className="mt-0.5 text-xs text-red-400">End your current admin session</p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-black text-white shadow-lg shadow-red-500/20 transition-colors hover:bg-red-600"
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
