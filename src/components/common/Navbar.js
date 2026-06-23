"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Our Story", href: "/our-story" },
    { name: "Contact", href: "/contact" },
  ];

  const phoneNumber = "+919116643411";
  const whatsappLink = "https://wa.me/919116643411";
  const instaLink = "https://instagram.com/fluencebrew";

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#AED7E9]/85 backdrop-blur-md border-b border-[#502D1D]/15 shadow-[0_8px_30px_rgba(80,45,29,0.08)]">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Fluence Brew"
              className="h-14 w-auto hover:scale-[1.02] transition"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm tracking-wide transition relative ${
                    active
                      ? "text-[#502D1D] font-semibold"
                      : "text-[#502D1D]/70 hover:text-[#502D1D]"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#502D1D] transition-all ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              popoverTarget="order-popover"
              className="px-5 py-2 rounded-full bg-[#502D1D] text-[#F7FBFC] text-sm hover:bg-[#3F2115] transition shadow-[0_12px_28px_rgba(80,45,29,0.22)]"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#502D1D] text-2xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-[#502D1D]/15 bg-[#D5EDF7] ${
            open ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="px-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[#502D1D]/75 text-sm py-2 border-b border-[#502D1D]/10"
              >
                {item.name}
              </Link>
            ))}

            <button
              type="button"
              popoverTarget="order-popover"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#502D1D] text-[#F7FBFC] text-center py-3 rounded-full text-sm"
            >
              Order Now
            </button>
          </div>
        </div>
      </header>

      {/* ORDER MODAL */}
      <div
        id="order-popover"
        popover="auto"
        className="m-auto w-[calc(100%-3rem)] max-w-md rounded-2xl border border-[#502D1D]/10 bg-[#F7FBFC] p-6 text-[#502D1D] shadow-[0_28px_80px_rgba(80,45,29,0.24)] backdrop:bg-black/40"
      >
        <button
          type="button"
          popoverTarget="order-popover"
          popoverTargetAction="hide"
          aria-label="Close order options"
          className="absolute top-3 right-4 text-xl text-[#502D1D] cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl text-[#502D1D]">Order with Fluence Brew</h2>

        <p className="mt-2 text-sm text-[#502D1D]/70">
          We offer both <b>Pickup</b> and <b>Delivery</b>. Choose your preferred
          way to reach us.
        </p>

        <div className="mt-6 space-y-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#502D1D] text-[#F7FBFC] text-center py-3 rounded-xl font-medium transition hover:bg-[#3F2115]"
          >
            Order on WhatsApp
          </a>

          <a
            href={instaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#AED7E9] text-[#502D1D] text-center py-3 rounded-xl font-medium border border-[#502D1D]/10 transition hover:bg-[#D5EDF7]"
          >
            DM on Instagram
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="block bg-[#F7FBFC] text-[#502D1D] text-center py-3 rounded-xl font-medium border border-[#502D1D]/20 transition hover:bg-white"
          >
            Call Now
          </a>
        </div>

        <p className="mt-5 text-xs text-center text-[#502D1D]/65">
          Fast response within a few minutes.
        </p>
      </div>
    </>
  );
}
