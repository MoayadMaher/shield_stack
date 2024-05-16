import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white ">
            Services of our platform
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="services/header-analyzer"
            >
              <h3 className="text-2xl font-bold">Header Analyzer →</h3>
              <div className="text-lg"></div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="services/pen-test"
            >
              <h3 className="text-2xl font-bold">Pen test →</h3>
              <div className="text-lg"></div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="services/stego"
            >
              <h3 className="text-2xl font-bold">stego →</h3>
              <div className="text-lg"></div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
