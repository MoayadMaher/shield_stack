"use client";

import { JSX, SVGProps } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Navbar({ session }: any) {
  const pathname = usePathname();
  if (pathname === "/login") {
    return null;
  }
  return (
    <header className="w-full border-b border-solid border-gray-400  bg-black text-gray-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <img
            src="/Shield_Stack_Logo.png"
            className="h-12 w-12"
            alt="Shield Stack Logo"
          />
          <span className="text-xl font-semibold">Shield Stack</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-m font-medium transition-colors hover:text-gray-300"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-m font-medium transition-colors hover:text-gray-300"
            prefetch={false}
          >
            Services
          </Link>
          {session && (
            <>
              <Link
                href="/history"
                className="text-m font-medium transition-colors hover:text-gray-300"
                prefetch={false}
              >
                My History
              </Link>
            </>
          )}
        </nav>
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={session.user.image} />
                  <AvatarFallback>{session.user.name}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={12}>
              <DropdownMenuItem>
                <Link
                  href="/account"
                  className="flex items-center gap-2"
                  prefetch={false}
                >
                  <UserIcon className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              {/* <DropdownMenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-2"
                  prefetch={false}
                >
                  <SettingsIcon className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem> */}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div
                  className="flex items-center gap-2"
                  onClick={() => signOut()}
                >
                  <LogOutIcon className="h-4 w-4" />
                  <span>Sign Out</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="bg-primary-500 hover:bg-primary-600 text-m rounded-md px-4 py-2 font-medium text-white transition-colors"
              prefetch={false}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

function LogOutIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
