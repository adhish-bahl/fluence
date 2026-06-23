"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur border-b border-[#E8E1DA]">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="../../public/Logo.png"
            alt="Fluence Brew"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[#502D1D] font-medium">
          <Link href="/" className="hover:opacity-70 transition">
            Home
          </Link>
          <Link href="/menu" className="hover:opacity-70 transition">
            Menu
          </Link>
          <Link href="/our-story" className="hover:opacity-70 transition">
            Our Story
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/menu"
            className="bg-[#502D1D] text-white px-5 py-2 rounded-full hover:opacity-90 transition"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#502D1D] text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#E8E1DA] px-6 py-4 space-y-4 text-[#502D1D]">
          <Link onClick={() => setOpen(false)} href="/">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} href="/menu">
            Menu
          </Link>
          <Link onClick={() => setOpen(false)} href="/our-story">
            Our Story
          </Link>
          <Link onClick={() => setOpen(false)} href="/contact">
            Contact
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/menu"
            className="block mt-3 bg-[#502D1D] text-white text-center py-2 rounded-full"
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}