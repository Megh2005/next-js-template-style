"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/auth" })}
      className="w-full rounded-lg px-4 py-3 font-medium bg-red-600 text-white hover:bg-red-700 border-2 border-slate-900 hover:shadow-md transition-all"
    >
      Sign Out
    </button>
  );
}
