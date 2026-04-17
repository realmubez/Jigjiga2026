import React, { useState } from "react";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { useLocation } from "wouter";
import { Globe, Info, Mail, Shield, LogOut, ExternalLink } from "lucide-react";

export default function AdminSettings() {
  const { logout } = useAdminAuth();
  const [, navigate] = useLocation();

  function handleLogout() {
    logout();
    navigate("/admin/login");
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Site Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your admin account and site information</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Site info */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center">
              <Globe className="w-4 h-4 text-blue-600" />
            </div>
            <h2 className="font-black text-gray-900">Website Info</h2>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500 font-semibold">Domain</span>
              <span className="font-bold text-gray-900">jigjiga.net</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500 font-semibold">Type</span>
              <span className="font-bold text-gray-900">Official City Portal</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500 font-semibold">Region</span>
              <span className="font-bold text-gray-900">Somali Region, Ethiopia</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500 font-semibold">Languages</span>
              <span className="font-bold text-gray-900">English · Soomaali</span>
            </div>
          </div>
        </div>

        {/* Admin info */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center">
              <Shield className="w-4 h-4 text-emerald-600" />
            </div>
            <h2 className="font-black text-gray-900">Admin Account</h2>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500 font-semibold">Username</span>
              <span className="font-bold text-gray-900">admin</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500 font-semibold">Role</span>
              <span className="font-bold text-emerald-600">Owner / Super Admin</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500 font-semibold">Password</span>
              <span className="font-bold text-gray-400">••••••••••</span>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center">
              <Mail className="w-4 h-4 text-orange-500" />
            </div>
            <h2 className="font-black text-gray-900">Contact Details</h2>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500 font-semibold">Email</span>
              <span className="font-bold text-gray-900">info@jigjiga.net</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500 font-semibold">Location</span>
              <span className="font-bold text-gray-900">Jigjiga, Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-purple-600" />
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
              <a key={label} href={href} target={ext ? "_blank" : "_self"} rel="noopener noreferrer"
                className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors">
                <span className="text-sm font-semibold text-gray-700">{label}</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Sign out */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="font-bold text-red-700 text-sm">Sign Out</p>
            <p className="text-red-400 text-xs mt-0.5">End your current admin session</p>
          </div>
          <button onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white text-sm font-black rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
