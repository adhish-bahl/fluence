const milkBased = [
  {
    name: "Latte",
    price: 159,
    availability: "🔥 ❄️",
    description: "Smooth espresso blended with velvety steamed milk.",
  },
  {
    name: "Flavoured Latte",
    price: 169,
    availability: "🔥 ❄️",
    description: "Classic latte with your choice of flavour.",
  },
  {
    name: "Cappuccino",
    price: 149,
    availability: "🔥",
    description: "Espresso topped with silky steamed milk and foam.",
  },
  {
    name: "Flat White",
    price: 149,
    availability: "🔥",
    description: "Rich espresso with finely textured microfoam.",
  },
  {
    name: "Spanish Iced Latte",
    price: 159,
    availability: "❄️",
    description: "Creamy espresso with a hint of sweetness over ice.",
  },
  {
    name: "Iced Coffee",
    price: 159,
    availability: "❄️",
    description: "Refreshing chilled coffee, perfect for any time.",
  },
  {
    name: "Mocha ⭐",
    price: 179,
    availability: "🔥 ❄️",
    description: "Espresso, chocolate, and milk in perfect harmony.",
  },
];

const blackCoffee = [
  {
    name: "Espresso",
    price: 119,
    availability: "🔥",
    description: "A bold and concentrated coffee shot.",
  },
  {
    name: "Americano",
    price: 119,
    availability: "🔥 ❄️",
    description: "Espresso diluted for a smooth, balanced cup.",
  },
  {
    name: "Long Black",
    price: 119,
    availability: "🔥",
    description: "Hot water topped with espresso for rich flavour.",
  },
  {
    name: "Macchiato",
    price: 139,
    availability: "🔥",
    description: "Espresso with a touch of milk foam.",
  },
  {
    name: "Cortado",
    price: 139,
    availability: "🔥",
    description: "Equal parts espresso and lightly steamed milk.",
  },
  {
    name: "Aerocano",
    price: 139,
    availability: "❄️",
    description: "A light, sparkling black coffee served chilled.",
  },
  {
    name: "Just Pour Over",
    price: 149,
    availability: "🔥",
    description: "Clean and aromatic manual brew highlighting the bean.",
  },
  {
    name: "Iced Pour Over",
    price: 149,
    availability: "❄️",
    description: "A crisp and refreshing chilled pour over.",
  },
  {
    name: "Classic Cold Brew",
    price: 139,
    availability: "❄️",
    description: "Slow-steeped for a naturally smooth finish.",
  },
  {
    name: "Espresso Sunshine ⭐",
    price: 159,
    availability: "❄️",
    description: "Our signature citrus-inspired espresso creation.",
  },
  {
    name: "Vietnamese Cold Brew ⭐",
    price: 159,
    availability: "❄️",
    description: "Bold cold brew with Vietnamese-inspired character.",
  },
  {
    name: "Vanilla Vietnamese Cold Brew",
    price: 159,
    availability: "❄️",
    description: "A vanilla twist on our signature Vietnamese brew.",
  },
  {
    name: "Flavoured Cold Brew",
    price: 169,
    availability: "❄️",
    description: "Available in Orange, Cranberry, or Tender Coconut.",
  },
];

function MenuSection({ title, items }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-[#502D1D] mb-8">{title}</h2>

      <div className="grid gap-5">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-3xl bg-white p-6 shadow-sm border border-[#E8E1DA]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-[#502D1D]">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm text-[#6B564C]">
                  {item.description}
                </p>

                <span className="inline-block mt-3 rounded-full bg-[#AED7E9] px-3 py-1 text-xs font-medium text-[#502D1D]">
                  {item.availability}
                </span>
              </div>

              <div className="text-2xl font-bold text-[#502D1D] whitespace-nowrap">
                ₹{item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#502D1D]">Our Menu</h1>

          <p className="mt-4 text-[#6B564C] max-w-2xl mx-auto">
            Crafted with care and brewed in motion. Explore our specialty
            coffees, signature cold brews, and barista favourites.
          </p>
        </div>

        <MenuSection title="🥛 Milk-Based" items={milkBased} />

        <MenuSection title="☕ Black / No Milk" items={blackCoffee} />

        <div className="mt-16 rounded-3xl bg-[#AED7E9] p-6 text-[#502D1D]">
          <h3 className="font-bold text-lg mb-3">Legend</h3>

          <div className="grid gap-2 text-sm">
            <p>🔥 Served Hot</p>
            <p>❄️ Served Cold</p>
            <p>🔥 ❄️ Available Hot or Cold</p>
            <p>⭐ Barista Special</p>
          </div>
        </div>
      </div>
    </main>
  );
}
