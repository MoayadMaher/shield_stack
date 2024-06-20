"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Page() {
  return (
    <div className="flex">
      <main className="flex min-h-screen flex-col items-center justify-center dark:text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight  ">
            Penetration testing Services
          </h1>
          <h2 className="text-3xl font-extrabold tracking-tight dark:text-white ">
            Select the test you want to perform
          </h2>

          <div className="mx-auto max-w-5xl px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </main>
    </div>
  );
}

export const projects = [
  {
    title: "Nmap",
    description:
      "Robust and efficient way to scan open ports on target systems. Nmap (Network Mapper) is a powerful tool used for network discovery and security auditing. ",
    link: "/services/pen-test/nmap",
  },
  {
    title: "Whois",
    description:
      "Comprehensive way to query the WHOIS database for information about domain names and IP addresses. WHOIS is a protocol used to query databases that store registered users or assignees of an Internet resource.",
    link: "/services/pen-test/whois",
  },
  {
    title: "More is coming",
    description:
      "We are working on more services to provide you the best penetration testing services. Stay tuned for more updates.",
    link: "/services/pen-test",
  },
];
