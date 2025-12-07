"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
      {/* Logo */}
      <Link href="/" className="text-xl font-semibold">
       TSender
      </Link>

      <div className="flex items-center gap-4">
        {/* GitHub Button */}
        <Link
          href="https://github.com/your-username/your-repo"
          target="_blank"
          className="flex items-center gap-2 px-3 py-1 rounded-md border hover:bg-gray-100 transition"
        >
          <Github size={18} />
          <span>GitHub</span>
        </Link>

        {/* Wallet Connect Button */}
        <ConnectButton />
      </div>
    </header>
  );
}
