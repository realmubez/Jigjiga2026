import React from "react";
import { Redirect } from "wouter";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import AdminLayout from "@/pages/admin/AdminLayout";

export default function AdminProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAdminAuth();
  if (!isLoggedIn) return <Redirect to="/admin/login" />;
  return <AdminLayout>{children}</AdminLayout>;
}
