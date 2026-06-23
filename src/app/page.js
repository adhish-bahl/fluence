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
    <main className="bg-[#FAF8F5] text-[#502D1D]">
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <img
            src={'/src/public/Logo.png'}
            alt="Fluence Brew"
            className="mx-auto w-44 mb-8"
          />

          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#7B5745]">
            Brewed in Motion
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Premium Specialty Coffee
          </h1>

          <p className="mt-6 text-lg max-w-2xl mx-auto text-[#6C574D]">
            Every cup at Fluence Brew is crafted with precision and passion,
            bringing you café-quality coffee wherever your day takes you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="bg-[#502D1D] text-white px-8 py-4 rounded-full hover:opacity-90 transition"
            >
              Explore Menu
            </Link>

            <Link
              href="/contact"
              className="border-2 border-[#502D1D] px-8 py-4 rounded-full hover:bg-[#AED7E9] transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="py-20 px-6 bg-[#AED7E9]/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Brews
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="text-2xl mb-2">⭐</div>

                <h3 className="text-xl font-semibold">{item.name}</h3>

                <p className="mt-3 text-sm text-[#6C574D]">
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
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">
            Why Fluence Brew?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <div className="text-4xl mb-3">☕</div>
              <h3 className="font-semibold">Specialty Coffee</h3>
              <p className="text-sm mt-2 text-[#6C574D]">
                Carefully selected beans for exceptional flavor.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold">Freshly Brewed</h3>
              <p className="text-sm mt-2 text-[#6C574D]">
                Every drink is made fresh when you order.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="font-semibold">Crafted with Care</h3>
              <p className="text-sm mt-2 text-[#6C574D]">
                Balanced recipes developed for consistency and taste.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="text-4xl mb-3">🥡</div>
              <h3 className="font-semibold">Takeaway Friendly</h3>
              <p className="text-sm mt-2 text-[#6C574D]">
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

        <p className="mt-4 max-w-xl mx-auto text-gray-200">
          Discover handcrafted coffee designed to keep you moving.
        </p>

        <Link
          href="/menu"
          className="inline-block mt-8 bg-[#AED7E9] text-[#502D1D] px-8 py-4 rounded-full font-semibold hover:opacity-90"
        >
          Browse the Menu
        </Link>
      </section>
    </main>
  );
}