"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleHambuger = () => {
    setShowHamburger(!showHamburger);
  };

  return (
    <nav className="">
      <div
        className={
          showHamburger
            ? "mb-14 flex justify-between items-center gap-5"
            : "mb-0 "
        }
      >
        <div className="hidden sm:flex justify-between items-center bg-black-green text-white px-20 p-4 gap-10">
          <Link href="/" className=" font-roboto text-xl font-bold">
            Anikus LLC
          </Link>
          <div className="flex justify-around items-center gap-10 text-lg">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div className=" sm:hidden bg-black-green py-5 ">
          <div className="text-white  flex items-center  gap-32 px-2">
            <div className="space-y-1 p-2" onClick={toggleHambuger}>
              <div className="w-6 h-1 bg-green"></div>
              <div className="w-6 h-1 bg-green"></div>
              <div className="w-6 h-1 bg-green"></div>
            </div>
            <Link href="/" className=" font-roboto text-xl font-bold ">
              Anikus LLC
            </Link>
          </div>

          <div
            onClick={toggleHambuger}
            className={
              showHamburger
                ? "sm:hidden flex flex-col justify-center w-screen items-center absolute -top-0 right-0 duration-150 pb-5 pt-2 text-white bg-black-green"
                : "hidden"
            }
          >
            <button className="p-2 mb-1 relative mr-auto">
              <div className="w-6 h-1 rotate-45 absolute bg-green"></div>
              <div className="w-6 h-1 -rotate-45 absolute bg-green"></div>
            </button>

            <div className="flex flex-col items-center gap-1">
              <div
                className={
                  "flex flex-col gap-1 justify-center items-center mt-3"
                }
              >
                <Link href="/" className="nav-list">
                  Home
                </Link>
                <Link href="/about" className="nav-list">
                  About Us
                </Link>
                <Link href="/contact" className="nav-list">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
