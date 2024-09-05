import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black-green text-white p-5 sm:p-10 text-center">
      <p>Anikus LLC. All Rights Reserved. ©{new Date().getFullYear()}</p>
    </div>
  );
}
