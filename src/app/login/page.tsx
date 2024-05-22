import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { UserAuthForm } from "@/components/ui/user-auth-form";
import { buttonVariants } from "../components/ui/button";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication to Shield Stack",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden h-screen w-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8",
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-black" />
          <div className="relative z-20 flex items-center text-3xl font-medium">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={70}
              height={70}
              className="mr-2"
            />
            Shield Stack
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Unlock a superior experience and gain full access to all our
                features by logging in now!
              </p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
                Login with only one click
              </h1>
              <p className="text-sm text-muted-foreground">
                The more easy way to create an account or login.
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Let's do some magic!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
