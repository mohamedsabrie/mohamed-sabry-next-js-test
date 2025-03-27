import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-x-10 sm:gap-x-[70px]">
        <li>
          {" "}
          <Link href="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link href="/">Shop</Link>
        </li>
        <li>
          {" "}
          <Link href="/">Products</Link>
        </li>
        <li>
          {" "}
          <Link href="/">Pages</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
