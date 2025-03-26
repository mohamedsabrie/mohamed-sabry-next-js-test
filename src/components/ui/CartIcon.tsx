"use client";

import useCartStore from "@/lib/stores/cart-store";
import Link from "next/link";
import CartImage from "@assets/cart.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Badge from "./Badge";

export default function CartIcon() {
  const { getTotalItems } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const totalItems = getTotalItems();
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href="/cart" className="relative inline-block">
      <Image src={CartImage} alt="cart-icon" />
      {mounted && totalItems > 0 && <Badge count={totalItems} />}
    </Link>
  );
}
