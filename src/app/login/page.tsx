"use client";

import GoogleButton from "react-google-button";
import { signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export default function LoginPage() {
  const handleSignOut = () => {
    signOut();
    document.cookie = "";
    localStorage.clear();
    NextResponse.redirect("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center  text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white ">
          Login and get started
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <GoogleButton onClick={() => signIn("google")} />
          <button
            onClick={handleSignOut}
            className="rounded-md bg-white px-4 py-2 text-black"
          >
            Sign Out
          </button>
        </div>
      </div>
    </main>
  );
}
