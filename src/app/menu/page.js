import milkBased from "../../data/milkMenu.json";
import blackCoffee from "../../data/blackMenu.json";

export default function MenuPage() {
  return (
    <main className="bg-[#AED7E9] py-14 px-6 text-[#502D1D]">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#502D1D]">
            Our Menu
          </h1>

          <p className="mt-3 text-[#502D1D]/75 max-w-xl mx-auto text-sm md:text-base">
            Crafted with precision, served fresh. Explore our signature brews
            below.
          </p>
        </div>

        {/* MENU WRAPPER (adds structure) */}
        <div className="space-y-8">
          {/* MILK SECTION */}
          <section className="bg-[#F7FBFC] border border-[#502D1D]/10 rounded-2xl p-6 md:p-8 shadow-[0_18px_50px_rgba(80,45,29,0.10)]">
            <h2 className="text-2xl font-bold text-[#502D1D] mb-6">
              🥛 Milk-Based Coffees
            </h2>

            <div className="grid gap-4">
              {milkBased.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start border-b last:border-none border-[#502D1D]/10 pb-4"
                >
                  <div className="pr-4">
                    <h3 className="font-semibold text-[#502D1D]">
                      {item.name}
                    </h3>

                    <p className="text-xs md:text-sm text-[#502D1D]/70 mt-1">
                      {item.description}
                    </p>

                    <span className="inline-block mt-2 text-[10px] md:text-xs bg-[#AED7E9] border border-[#502D1D]/10 px-2 py-1 rounded-full">
                      {item.availability}
                    </span>
                  </div>

                  <div className="font-bold text-[#502D1D] whitespace-nowrap">
                    ₹{item.price}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BLACK COFFEE */}
          <section className="bg-[#F7FBFC] border border-[#502D1D]/10 rounded-2xl p-6 md:p-8 shadow-[0_18px_50px_rgba(80,45,29,0.10)]">
            <h2 className="text-2xl font-bold text-[#502D1D] mb-6">
              ☕ Black / No Milk
            </h2>

            <div className="grid gap-4">
              {blackCoffee.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start border-b last:border-none border-[#502D1D]/10 pb-4"
                >
                  <div className="pr-4">
                    <h3 className="font-semibold text-[#502D1D]">
                      {item.name}
                    </h3>

                    <p className="text-xs md:text-sm text-[#502D1D]/70 mt-1">
                      {item.description}
                    </p>

                    <span className="inline-block mt-2 text-[10px] md:text-xs bg-[#AED7E9] border border-[#502D1D]/10 px-2 py-1 rounded-full">
                      {item.availability}
                    </span>
                  </div>

                  <div className="font-bold text-[#502D1D] whitespace-nowrap">
                    ₹{item.price}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LEGEND (compact row style) */}
          <section className="bg-[#502D1D] rounded-2xl p-5 text-[#F7FBFC] shadow-[0_18px_50px_rgba(80,45,29,0.18)]">
            <div className="flex flex-wrap gap-x-6 justify-center gap-y-2 text-sm">
              <span>🔥 Hot</span>
              <span>❄️ Cold</span>
              <span>🔥❄️ Both</span>
              <span>⭐ Barista Special</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
