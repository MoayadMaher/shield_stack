import Link from "next/link";
import React from "react";

export default function Page() {
  const services = [
    {
      title: "Header Analyzer",
      description:
        "Analyze HTTP headers in-depth to gain insights, diagnose issues, and optimize site performance with our advanced header analysis tool.",
      link: "/services/header-analyzer",
    },
    {
      title: "Penetration Testing",
      description:
        "Utilize Nmap for comprehensive network scanning and Whois for domain registration details to ensure your systems are secure and compliant.",
      link: "/services/pen-test",
    },
    {
      title: "Steganography",
      description:
        "Embed secret messages within images securely using our steganography service, providing a hidden way to transmit sensitive information.",
      link: "/services/stego",
    },
    {
      title: "More is coming soon!",
      description:
        "Stay tuned as we continuously expand our services with new tools, features, and maybe AI  to keep you ahead in the cybersecurity wrold.",
      link: "",
    },
  ];

  const serviceCards = services.map((service) => {
    const ButtonComponent = () => {
      if (service.title === "More is coming soon!") {
        return (
          <button
            className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300"
            disabled
          >
            Coming Soon
          </button>
        );
      } else {
        return (
          <Link href={service.link}>
            <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
              Get started
            </button>
          </Link>
        );
      }
    };

    return (
      <div className=" relative w-full max-w-96">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start  justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            {service.title}
          </h1>

          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
            {service.description}
          </p>
          <ButtonComponent />
        </div>
      </div>
    );
  });

  return (
    <>
      <h1 className="m-11 flex justify-center text-5xl font-extrabold tracking-tight text-white">
        Services of our platform
      </h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
        {serviceCards}
      </div>
    </>
  );
}
