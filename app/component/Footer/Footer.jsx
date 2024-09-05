import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black-green text-white p-10 sm:p-20 sm:flex justify-between items-center gap-10">
      <Link href="/" className=" font-roboto text-xl font-bold">
        Anikus LLC
      </Link>

      <div className="sm:flex justify-between items-center lg:gap-80 md:gap-40">
        <div className="flex flex-col justify-around items-center gap-2 text-lg">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div className="flex flex-col justify-around items-center gap-2 text-lg">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
