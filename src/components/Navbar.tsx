import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="w-full xl:px-24 lg:px-16 md:px-12 sm:px-8 px-32 py-8 font-medium flex items-center justify-between relative">
      <nav>
        <Link href="/">
          <h2 className="font-bold capitalize text-2xl text-primary">
            Pokedex
          </h2>
        </Link>
      </nav>
    </header>
  );
}
