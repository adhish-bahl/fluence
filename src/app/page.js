import Link from "next/link";
// import logo from'@/public/Logo.png'

export default function Home() {
  const featured = [
    {
      name: "Espresso Sunshine",
      price: "₹159",
      desc: "A refreshing citrus-inspired espresso creation.",
    },
    {
      name: "Vietnamese Cold Brew",
      price: "₹159",
      desc: "Bold, smooth, and our barista's favorite.",
    },
    {
      name: "Mocha",
      price: "₹179",
      desc: "Rich chocolate meets handcrafted espresso.",
    },
    {
      name: "Spanish Iced Latte",
      price: "₹159",
      desc: "Creamy, chilled, and perfectly balanced.",
    },
  ];

  return (
    <main className="bg-[#AED7E9] text-[#502D1D]">
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 bg-[linear-gradient(180deg,#AED7E9_0%,#D5EDF7_58%,#F7FBFC_100%)]">
        <div className="max-w-4xl text-center">
          <img
            src={'/logo.png'}
            alt="Fluence Brew"
            className="mx-auto w-44 mb-8 drop-shadow-[0_18px_30px_rgba(80,45,29,0.18)]"
          />

          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#502D1D]/75">
            Brewed in Motion
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
            Premium Specialty Coffee
          </h1>

          <p className="mt-6 text-lg max-w-2xl mx-auto text-[#502D1D]/75">
            Every cup at Fluence Brew is crafted with precision and passion,
            bringing you café-quality coffee wherever your day takes you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="bg-[#502D1D] text-[#F7FBFC] px-8 py-4 rounded-full shadow-[0_16px_35px_rgba(80,45,29,0.28)] hover:bg-[#3F2115] transition"
            >
              Explore Menu
            </Link>

            <Link
              href="/contact"
              className="border-2 border-[#502D1D] bg-white/35 px-8 py-4 rounded-full hover:bg-white/60 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="py-20 px-6 bg-[#F7FBFC]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Brews
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item) => (
              <div
                key={item.name}
                className="bg-[#FFFDF8] rounded-2xl p-6 border border-[#502D1D]/10 shadow-[0_18px_45px_rgba(80,45,29,0.08)] hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(80,45,29,0.14)] transition"
              >
                <div className="mb-4 h-10 w-10 rounded-full bg-[#AED7E9] border border-[#502D1D]/15" />

                <h3 className="text-xl font-semibold">{item.name}</h3>

                <p className="mt-3 text-sm text-[#502D1D]/70">
                  {item.desc}
                </p>

                <p className="mt-5 text-2xl font-bold">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-[#AED7E9]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">
            Why Fluence Brew?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#F7FBFC]/85 rounded-2xl p-6 border border-white/60 shadow-[0_14px_35px_rgba(80,45,29,0.08)]">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#502D1D]/55">01</div>
              <h3 className="font-semibold">Specialty Coffee</h3>
              <p className="text-sm mt-2 text-[#502D1D]/70">
                Carefully selected beans for exceptional flavor.
              </p>
            </div>

            <div className="bg-[#F7FBFC]/85 rounded-2xl p-6 border border-white/60 shadow-[0_14px_35px_rgba(80,45,29,0.08)]">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#502D1D]/55">02</div>
              <h3 className="font-semibold">Freshly Brewed</h3>
              <p className="text-sm mt-2 text-[#502D1D]/70">
                Every drink is made fresh when you order.
              </p>
            </div>

            <div className="bg-[#F7FBFC]/85 rounded-2xl p-6 border border-white/60 shadow-[0_14px_35px_rgba(80,45,29,0.08)]">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#502D1D]/55">03</div>
              <h3 className="font-semibold">Crafted with Care</h3>
              <p className="text-sm mt-2 text-[#502D1D]/70">
                Balanced recipes developed for consistency and taste.
              </p>
            </div>

            <div className="bg-[#F7FBFC]/85 rounded-2xl p-6 border border-white/60 shadow-[0_14px_35px_rgba(80,45,29,0.08)]">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#502D1D]/55">04</div>
              <h3 className="font-semibold">Takeaway Friendly</h3>
              <p className="text-sm mt-2 text-[#502D1D]/70">
                Enjoy premium coffee on the move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#502D1D] text-white text-center">
        <h2 className="text-4xl font-bold">
          Ready for your next cup?
        </h2>

        <p className="mt-4 max-w-xl mx-auto text-[#D5EDF7]">
          Discover handcrafted coffee designed to keep you moving.
        </p>

        <Link
          href="/menu"
          className="inline-block mt-8 bg-[#AED7E9] text-[#502D1D] px-8 py-4 rounded-full font-semibold hover:bg-[#D5EDF7] transition"
        >
          Browse the Menu
        </Link>
      </section>
    </main>
  );
}
