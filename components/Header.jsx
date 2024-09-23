"use client";

import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "@/app/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Muhammad Awais<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop Nav  & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
