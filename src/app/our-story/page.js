export default function OurStory() {
  return (
    <main className="bg-[#FAF8F5] text-[#502D1D]">

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Our Story
        </h1>

        <p className="mt-4 text-[#6B574D] max-w-2xl mx-auto text-lg">
          Built on passion, powered by coffee, and brewed in motion.
        </p>
      </section>

      {/* Main Story */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-8 text-[#6B574D] text-lg leading-relaxed">

          <p>
            <span className="text-[#502D1D] font-semibold">Fluence Brew</span> was born from a simple idea — great coffee shouldn’t be limited to cafés, it should move with you.
          </p>

          <p>
            We started with a passion for specialty coffee and a vision to bring handcrafted, barista-quality drinks into everyday life — quick, accessible, and always consistent.
          </p>

          <p>
            Every cup we serve is carefully brewed using quality beans, precise techniques, and a deep respect for the craft. Whether it’s a bold espresso or a smooth cold brew, each drink is designed to deliver balance, flavour, and energy.
          </p>

          <p>
            The name <span className="text-[#502D1D] font-semibold">“Fluence”</span> represents flow, movement, and energy — because coffee should keep you going, wherever life takes you.
          </p>

          <p>
            Our tagline <span className="text-[#502D1D] font-semibold">“Brewed in Motion”</span> reflects exactly that — coffee made for people on the move, without compromising on quality.
          </p>

        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#AED7E9]/30 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-12">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-sm text-[#6B574D]">
                Every cup is brewed with precision and care using specialty-grade ingredients.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Built for Motion</h3>
              <p className="text-sm text-[#6B574D]">
                Designed for fast takeaway without compromising on experience or taste.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Craft & Consistency</h3>
              <p className="text-sm text-[#6B574D]">
                Every drink tastes just as good as the last — reliable, smooth, and refined.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold">
          This is just the beginning
        </h2>

        <p className="mt-4 text-[#6B574D]">
          Experience the journey of coffee, one cup at a time.
        </p>

        <a
          href="/menu"
          className="inline-block mt-8 bg-[#502D1D] text-white px-8 py-4 rounded-full hover:opacity-90 transition"
        >
          Explore Menu
        </a>
      </section>

    </main>
  );
}