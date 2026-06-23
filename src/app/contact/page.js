export default function Contact() {
  return (
    <main className="bg-[#FAF8F5] min-h-[89vh] text-[#502D1D]">

      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 text-[#6B574D] max-w-xl mx-auto text-lg">
          We’d love to hear from you. Whether it’s feedback, orders, or just coffee talk ☕
        </p>
      </section>

      {/* Contact Cards */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:namaste@fluencebrew.com"
            className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="mt-2 text-[#6B574D] text-sm">
              namaste@fluencebrew.com
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919116643411"
            target="_blank"
            className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-xl font-semibold">WhatsApp</h2>
            <p className="mt-2 text-[#6B574D] text-sm">
              Chat with us instantly
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/fluencebrew"
            target="_blank"
            className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">📸</div>
            <h2 className="text-xl font-semibold">Instagram</h2>
            <p className="mt-2 text-[#6B574D] text-sm">
              @fluencebrew
            </p>
          </a>

        </div>
      </section>

      {/* Footer Note */}
      <section className="text-center pb-20 px-6">
        <p className="text-[#6B574D]">
          We usually respond within a few hours ☕
        </p>
      </section>

    </main>
  );
}