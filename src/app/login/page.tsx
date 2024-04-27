"use client";

import GoogleButton from "react-google-button";
import { signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const handleSignIn = () => {
    signIn("google");
    redirect("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white ">
          It’s a good choice enjoy the website and erase my number
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <GoogleButton onClick={handleSignIn} />
          <button
            onClick={() => signOut()}
            className="rounded-md bg-white px-4 py-2 text-black"
          >
            Back to My live
          </button>
        </div>
      </div>
    </main>
  );
}
