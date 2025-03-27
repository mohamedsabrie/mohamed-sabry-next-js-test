"use client";

import useCartStore from "@/lib/stores/cart-store";
import { ProductType } from "@/lib/types";
import React, { useState, useEffect } from "react";
import Quantity from "./Quantity";
import { useRouter } from "next/navigation";

function AddToCart({ product }: { product: ProductType }) {
  const { addToCart, cart } = useCartStore();
  const { push } = useRouter();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setQuantity(existingItem.quantity);
    }
  }, [cart, product.id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    push("/cart");
  };

  return (
    <div>
      <h3 className="mb-3">Quantity</h3>
      <div className="flex flex-col sm:flex-row sm:items-center w-full gap-y-5 sm:gap-y-0 sm:gap-x-[30px]">
        <Quantity quantity={quantity} setQuantity={setQuantity} />
        <button
          onClick={handleAddToCart}
          className="border w-full flex-1 border-black py-3 px-6 cursor-pointer"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
