"use client";

import React, { useEffect } from "react";

function Quantity({
  quantity,
  setQuantity,
  handleAddToCart
}: {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  handleAddToCart?: () => void;
}) {
  const handleQuantityChange = (value: number) => {
    setQuantity(Math.min(999, Math.max(1, value)));
  };

  useEffect(() => {
    if (handleAddToCart) {
      handleAddToCart();
    }
  }, [quantity]);

  return (
    <div className="border border-[#EEEEEE] flex items-center max-w-fit">
      <div
        onClick={() => handleQuantityChange(quantity - 1)}
        className="cursor-pointer w-10 flex items-center justify-center text-2xl  py-3"
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
        className="text-center text-lg w-10 h-full cursor-pointer  py-3"
      >
        <span>&#43;</span>
      </div>
    </div>
  );
}

export default Quantity;
