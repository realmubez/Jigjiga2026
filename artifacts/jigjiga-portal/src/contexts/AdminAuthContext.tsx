import React, { createContext, useContext, useState, useEffect } from "react";
import { getUsers, AdminUser, UserRole } from "@/lib/adminStore";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "Jigjiga@2024";
const SESSION_KEY = "jjg_admin_session";

export interface SessionUser {
  type: "superadmin" | "user";
  id?: string;
  name: string;
  email?: string;
  role?: UserRole;
}

interface AdminAuthContextType {
  isLoggedIn: boolean;
  currentUser: SessionUser | null;
  login: (identifier: string, password: string) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType>({
  isLoggedIn: false,
  currentUser: null,
  login: () => false,
  logout: () => {},
});

function loadSession(): SessionUser | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SessionUser;
  } catch {
    return null;
  }
}

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<SessionUser | null>(loadSession);
  const isLoggedIn = currentUser !== null;

  function login(identifier: string, password: string): boolean {
    const id = identifier.trim().toLowerCase();

    if (
      (id === ADMIN_USERNAME || id === "admin") &&
      password === ADMIN_PASSWORD
    ) {
      const session: SessionUser = { type: "superadmin", name: "Administrator" };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
      setCurrentUser(session);
      return true;
    }

    const users = getUsers();
    const match = users.find(
      (u) =>
        u.status === "active" &&
        (u.email.toLowerCase() === id || u.name.toLowerCase() === id) &&
        u.password === password
    );

    if (match) {
      const session: SessionUser = {
        type: "user",
        id: match.id,
        name: match.name,
        email: match.email,
        role: match.role,
      };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
      setCurrentUser(session);
      return true;
    }

    return false;
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
  }

  return (
    <AdminAuthContext.Provider value={{ isLoggedIn, currentUser, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}
