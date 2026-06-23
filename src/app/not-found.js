import Link from "next/link";


export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F9F7F4] px-6">
      <div className="max-w-xl text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#AED7E9] mb-8">
          <span className="text-5xl">☕</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-[#502D1D]">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-[#502D1D]">
          Looks like this brew went missing.
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
          While you're here, why not explore our handcrafted specialty coffee?
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-[#502D1D] px-6 py-3 text-white transition hover:opacity-90"
          >
            Back to Home
          </Link>

          <Link
            href="/menu"
            className="rounded-full border-2 border-[#502D1D] px-6 py-3 text-[#502D1D] transition hover:bg-[#AED7E9]"
          >
            View Menu
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-500 italic">
          Fluence Brew • Brewed in Motion
        </p>
      </div>
    </main>
  );
}
