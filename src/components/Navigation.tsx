import Link from 'next/link';
import React from 'react';

function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-x-[70px]">
        <li> <Link href="/">Home</Link></li>
        <li>Shop</li>
        <li>Products</li>
        <li>Pages</li>
      </ul>
    </nav>
  );
}

export default Navigation;
