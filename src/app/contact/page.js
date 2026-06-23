export default function Contact() {
  return (
    <main className="bg-[linear-gradient(180deg,#AED7E9_0%,#D5EDF7_32%,#AED7E9_100%)] min-h-[89vh] text-[#502D1D]">

      {/* Hero */}
      <section className="px-6 pt-20 pb-12 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#502D1D]/60">
            Get in Touch
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-[#502D1D]/75 max-w-xl mx-auto text-lg">
            We’d love to hear from you. Whether it’s feedback, orders, or just coffee talk.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-6 pt-2 pb-24">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:namaste@fluencebrew.com"
            className="bg-[#F7FBFC] rounded-2xl p-8 text-center border border-[#502D1D]/10 shadow-[0_18px_50px_rgba(80,45,29,0.10)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(80,45,29,0.15)] transition"
          >
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="mt-2 text-[#502D1D]/70 text-sm">
              namaste@fluencebrew.com
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919116643411"
            target="_blank"
            className="bg-[#F7FBFC] rounded-2xl p-8 text-center border border-[#502D1D]/10 shadow-[0_18px_50px_rgba(80,45,29,0.10)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(80,45,29,0.15)] transition"
          >
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-xl font-semibold">WhatsApp</h2>
            <p className="mt-2 text-[#502D1D]/70 text-sm">
              Chat with us instantly
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/fluencebrew"
            target="_blank"
            className="bg-[#F7FBFC] rounded-2xl p-8 text-center border border-[#502D1D]/10 shadow-[0_18px_50px_rgba(80,45,29,0.10)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(80,45,29,0.15)] transition"
          >
            <div className="text-4xl mb-4">📸</div>
            <h2 className="text-xl font-semibold">Instagram</h2>
            <p className="mt-2 text-[#502D1D]/70 text-sm">
              @fluencebrew
            </p>
          </a>

        </div>
      </section>

      {/* Footer Note */}
      <section className="text-center pb-20 px-6">
        <p className="text-[#502D1D]/75">
          We usually respond within a few hours ☕
        </p>
      </section>

    </main>
  );
}
