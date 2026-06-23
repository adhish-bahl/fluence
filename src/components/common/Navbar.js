"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
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
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/80 backdrop-blur-md border-b border-[#E8E1DA]">
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
                      : "text-[#6B574D] hover:text-[#502D1D]"
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
              onClick={() => setOrderModal(true)}
              className="px-5 py-2 rounded-full bg-[#502D1D] text-white text-sm hover:opacity-90 transition shadow-sm"
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
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-[#E8E1DA] bg-[#FAF8F5] ${
            open ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="px-6 flex flex-col gap-4">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[#6B574D] text-sm py-2 border-b border-[#E8E1DA]"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                setOrderModal(true);
              }}
              className="mt-2 bg-[#502D1D] text-white text-center py-3 rounded-full text-sm"
            >
              Order Now
            </button>
          </div>
        </div>
      </header>

      {/* ORDER MODAL */}
      {orderModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-6">
          <div className="bg-[#FAF8F5] w-full max-w-md rounded-2xl p-6 shadow-xl relative">

            {/* Close */}
            <button
              onClick={() => setOrderModal(false)}
              className="absolute top-3 right-4 text-[#502D1D] text-xl cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-2xl  text-[#502D1D]">
              Order with Fluence Brew
            </h2>

            <p className="mt-2 text-sm text-[#6B574D]">
              We offer both <b>Pickup</b> and <b>Delivery</b>. Choose your preferred way to reach us.
            </p>

            {/* Options */}
            <div className="mt-6 space-y-3">

              <a
                href={whatsappLink}
                target="_blank"
                className="block bg-[#25D366] text-white text-center py-3 rounded-xl font-medium"
              >
                💬 Order on WhatsApp
              </a>

              <a
                href={instaLink}
                target="_blank"
                className="block bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-3 rounded-xl font-medium"
              >
                📸 DM on Instagram
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="block bg-[#502D1D] text-white text-center py-3 rounded-xl font-medium"
              >
                📞 Call Now
              </a>
            </div>

            <p className="mt-5 text-xs text-center text-[#6B574D]">
              Fast response within a few minutes ☕
            </p>
          </div>
        </div>
      )}
    </>
  );
}