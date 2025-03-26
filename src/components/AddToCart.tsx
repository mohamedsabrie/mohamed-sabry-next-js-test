"use client";

import useCartStore from "@/lib/stores/cart-store";
import { ProductType } from "@/lib/types";
import React, { useState } from "react";

function AddToCart({ product }: { product: ProductType }) {
  const { addToCart, cart } = useCartStore();
  console.log(cart, "cart")
  // Initialize quantity from cart if product exists
  const existingItem = cart.find(item => item.id === product.id);
  const [quantity, setQuantity] = useState(existingItem?.quantity || 1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (value: number) => {
    // Ensure quantity is between 1 and 999
    setQuantity(Math.min(999, Math.max(1, value)));
  };

  return (
    <div>
      <h3 className="mb-3">Quantity</h3>
      <div className="flex items-center gap-x-[30px]">
        <div className="border py-3 border-[#EEEEEE] flex items-center">
          <div
            onClick={() => handleQuantityChange(quantity - 1)}
            className="cursor-pointer w-10 flex items-center justify-center text-2xl"
          >
            <span className="w-[9px] bg-black h-[2px] inline-block" />
          </div>
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            min="1"
            max="999"
            className="w-16 text-center focus:outline-none"
          />
          <div
            onClick={() => handleQuantityChange(quantity + 1)}
            className="text-center w-10 h-full cursor-pointer"
          >
            <span>&#43;</span>
          </div>
        </div>
        <button 
          onClick={handleAddToCart}
          className="border flex-1 border-black py-3 px-6"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
