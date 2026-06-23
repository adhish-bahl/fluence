import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#502D1D] text-[#F7FBFC] mt-20">

      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">Fluence Brew</h2>
          <p className="mt-3 text-sm text-[#D5EDF7]">
            Brewed in Motion — where coffee flows with precision, balance, and craft.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-2 text-sm text-[#D5EDF7]">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/menu" className="hover:text-white transition">Menu</Link>
            <Link href="/our-story" className="hover:text-white transition">Our Story</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>

          <div className="flex flex-col gap-3 text-sm text-[#D5EDF7]">

            {/* WhatsApp */}
            <a
              href="https://wa.me/919116643411"
              target="_blank"
              className="hover:text-white transition"
            >
              💬 WhatsApp Us
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/fluencebrew"
              target="_blank"
              className="hover:text-white transition"
            >
              📸 Instagram
            </a>

            {/* Email */}
            <a
              href="mailto:hello@fluencebrew.com"
              className="hover:text-white transition"
            >
              📧 hello@fluencebrew.com
            </a>

            {/* Location */}
            <p>📍 Ajmer, India</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      {/* <div className="border-t border-[#6B3B2A]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-[#E8D9D1]">

          <p>© {new Date().getFullYear()} Fluence Brew. All rights reserved.</p>

          <p className="mt-2 md:mt-0">
            Crafted with care ☕
          </p>

        </div>
      </div> */}

    </footer>
  );
}
