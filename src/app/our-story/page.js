export default function OurStory() {
  return (
    <main className="bg-[linear-gradient(180deg,#AED7E9_0%,#D5EDF7_28%,#AED7E9_62%,#F7FBFC_100%)] text-[#502D1D]">

      {/* Hero */}
      <section className="px-6 pt-20 pb-12 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#502D1D]/60">
            Brewed in Motion
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Our Story
          </h1>

          <p className="mt-4 text-[#502D1D]/75 max-w-2xl mx-auto text-lg">
            Where coffee, water, and movement come together in perfect flow.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 pt-2 pb-20">
        <div className="max-w-4xl mx-auto space-y-8 bg-[#F7FBFC]/90 border border-white/70 rounded-2xl p-6 md:p-10 text-[#502D1D]/75 text-lg leading-relaxed shadow-[0_24px_70px_rgba(80,45,29,0.12)]">

          <p>
            <span className="text-[#502D1D] font-semibold">Fluence Brew</span> is built on a simple observation — great coffee is not static. It flows.
          </p>

          <p>
            The name <span className="text-[#502D1D] font-semibold">“Fluence”</span> comes from the idea of flow — the smooth, continuous movement of water through coffee grounds that extracts depth, clarity, and character.
          </p>

          <p>
            We believe coffee is not just brewed — it is guided. Water moves through carefully chosen beans, unlocking flavour step by step. That process is what gives coffee its soul, and it is what inspired everything we build.
          </p>

          <p>
            At Fluence Brew, every cup is designed around this philosophy of flow — balanced extraction, precise brewing, and consistency in motion. Nothing rushed, nothing lost.
          </p>

          <p>
            From bold espresso to slow-steeped cold brew, each drink reflects the same principle: when water flows correctly through coffee, everything aligns — taste, aroma, and energy.
          </p>

          <p>
            <span className="text-[#502D1D] font-semibold">“Brewed in Motion”</span> is not just a tagline. It is the process itself — coffee shaped by movement, made for people who are always moving.
          </p>

        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F7FBFC] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-12">
            What We Believe In
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#FFFDF8] rounded-2xl p-6 border border-[#502D1D]/10 shadow-[0_16px_40px_rgba(80,45,29,0.08)]">
              <h3 className="text-xl font-semibold mb-2">Flow Matters</h3>
              <p className="text-sm text-[#502D1D]/70">
                Coffee is defined by how water moves through it — precision creates flavour.
              </p>
            </div>

            <div className="bg-[#FFFDF8] rounded-2xl p-6 border border-[#502D1D]/10 shadow-[0_16px_40px_rgba(80,45,29,0.08)]">
              <h3 className="text-xl font-semibold mb-2">Nothing Rushed</h3>
              <p className="text-sm text-[#502D1D]/70">
                Great coffee respects time, temperature, and technique.
              </p>
            </div>

            <div className="bg-[#FFFDF8] rounded-2xl p-6 border border-[#502D1D]/10 shadow-[0_16px_40px_rgba(80,45,29,0.08)]">
              <h3 className="text-xl font-semibold mb-2">Consistency in Motion</h3>
              <p className="text-sm text-[#502D1D]/70">
                Every cup should feel familiar, even when life is not.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold">
          Coffee is movement
        </h2>

        <p className="mt-4 text-[#502D1D]/75 max-w-xl mx-auto">
          And at Fluence Brew, we simply make sure that movement tastes right.
        </p>

        <a
          href="/menu"
          className="inline-block mt-8 bg-[#502D1D] text-[#F7FBFC] px-8 py-4 rounded-full shadow-[0_16px_35px_rgba(80,45,29,0.25)] hover:bg-[#3F2115] transition"
        >
          Explore Menu
        </a>
      </section>

    </main>
  );
}
