import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { getServerSession } from "next-auth/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import dynamic from "next/dynamic";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
import { cn } from "@/lib/utils";

import { Inter as fontSans } from "next/font/google";
import { HeroHighlight } from "@/app/components/ui/hero-highlight";

export const metadata = {
  title: "Shield Stack",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Navbar = dynamic(() => import("./components/navbar"), {
    ssr: false,
  });

  const session = await getServerSession();

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          `font-sans ${inter.variable}`,
        )}
      >
        <Navbar session={session} />

        <HeroHighlight
          containerClassName="hero-highlight-container"
          className="hero-highlight-content "
        >
          {children}
        </HeroHighlight>
        <SpeedInsights />
      </body>
    </html>
  );
}
