"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthProvider";
import useUserRole from "@/hooks/useUserRole";

export default function ProtectedRoute({ allowedRoles = [], children }) {
  const { user, loading: authLoading } = useAuth();
  const { role, loading: roleLoading } = useUserRole();
  const router = useRouter();
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (authLoading || roleLoading) return; // still loading, do nothing

    // Not logged in → redirect
    if (!user) {
      router.replace("/signin");
      return;
    }

    // Role check
    if (allowedRoles.length === 0 || allowedRoles.includes(role?.toLowerCase())) {
      setVerified(true); // allow access
    } else {
      router.replace("/"); // redirect if role not allowed
    }
  }, [authLoading, roleLoading, user, role, router, allowedRoles]);

  // 🔹 Don't render children until verified
  if (authLoading || roleLoading || !verified) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Checking access...
      </div>
    );
  }

  return <>{children}</>;
}
