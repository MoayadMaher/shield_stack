import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white ">
          404 Not Found
        </h1>
        <p>Could not find the requested page</p>
        <Link href="/">
          <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
            Go Home
          </button>
        </Link>
      </div>
    </main>
  );
}
