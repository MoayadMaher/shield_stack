"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { FaCheck } from "react-icons/fa";

import { UpdateIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 lg:flex-row">
      <div className="flex-1 text-center lg:text-left">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="mx-auto max-w-4xl px-4 text-2xl font-bold leading-relaxed text-neutral-700 md:text-4xl lg:text-5xl lg:leading-snug dark:text-white"
          aria-label="Main Title"
        >
          Your Comprehensive Cybersecurity Solution Effortlessly secure your
          digital assets with our{" "}
          <Highlight className="text-black dark:text-white">
            all-in-one platform
          </Highlight>
          <div className="mt-8 flex gap-4">
            <Link href="/services">
              <Button className="bg-white text-black hover:bg-indigo-200">
                Explore Features
              </Button>
            </Link>
            <Link href="/test">
              <Button className="bg-gray-800 text-white">
                What is unber dev
              </Button>
            </Link>
          </div>
        </motion.h1>
      </div>

      <div className="relative hidden h-[500px] w-[700px] flex-row flex-wrap lg:flex">
        <Card className="absolute -top-[15px] w-[340px] shadow-black/10 drop-shadow-xl dark:shadow-white/10">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="flex flex-col">
              <CardTitle className="text-lg">
                Experience cutting-edge security solutions tailored for
                specialists.
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            No need to your laptop every time you want to do small test
          </CardContent>
        </Card>

        <Card className="absolute right-[20px] top-4 flex w-80 flex-col items-center justify-center shadow-black/10 drop-shadow-xl dark:shadow-white/10">
          <CardHeader className="mt-8 flex items-center justify-center pb-2">
            <img
              src="/advanced_cybersecurity_icon.png"
              className="absolute -top-12 aspect-square h-24 w-24 rounded-full object-cover grayscale-[0%]"
            />
            <CardTitle className="text-center">
              Advanced Threat Intelligence
            </CardTitle>
            <CardDescription className="font-normal text-primary"></CardDescription>
          </CardHeader>

          <CardContent className="pb-2 text-center">
            <p>
              Gain insights from real-time threat intelligence to stay ahead of
              cyber threats
            </p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>

        <Card className="absolute left-[50px] top-[170px] w-72  shadow-black/10 drop-shadow-xl dark:shadow-white/10">
          <CardHeader>
            <CardTitle className="item-center flex justify-between">
              Free
              <Badge variant="secondary" className="text-sm text-primary">
                and open-source
              </Badge>
            </CardTitle>
            <div>
              <span className="text-3xl font-bold">$0</span>
              <span className="text-muted-foreground"> /month</span>
            </div>

            <CardDescription>Just enjoy the journey</CardDescription>
          </CardHeader>

          <hr className="m-auto mb-4 w-4/5" />

          <CardFooter className="flex">
            <div className="space-y-4">
              {[
                "User-Friendly Interface",
                "Seamless integration",
                "Elevate Your Cyber Defenses",
                "Secure Today, Safe Tomorrow",
              ].map((benefit: string) => (
                <span key={benefit} className="flex">
                  <FaCheck />
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              ))}
            </div>
          </CardFooter>
        </Card>

        {/* Service */}
        <Card className="absolute -right-[10px] bottom-[65px] w-[350px]  shadow-black/10 drop-shadow-xl dark:shadow-white/10">
          <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
            <div className="mt-1 rounded-2xl bg-primary/20 p-1">
              <UpdateIcon />
            </div>
            <div>
              <CardTitle>One-Click Security Updates</CardTitle>
              <CardDescription className="text-md mt-2">
                Simplify updates and ensure your defenses are always up-to-date.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
