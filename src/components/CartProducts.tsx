"use client";

import useCartStore from "@/lib/stores/cart-store";
import React from "react";
import CartProduct from "./CartProduct";

function CartProducts() {
  const { cart, clearCart, getTotalPrice } = useCartStore();

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear all items from your cart?')) {
      clearCart();
    }
  };

  return (
    <div className="container mx-auto p-6">
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <table className="w-full border-collapse ">
            <thead>
              <tr className="border-b border-[#00000063] ">
                <th className="text-left py-4 font-normal">Product</th>
                <th className="text-left py-4 font-normal">Price</th>
                <th className="text-left py-4 font-normal">Quantity</th>
                <th className=" py-4 text-end pr-8 w-auto font-normal">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartProduct key={item.id} product={item} />
              ))}
            </tbody>
          </table>

          <div className="mt-6 flex justify-between items-center">
            <button onClick={handleClearCart} className="text-red-500  font-poppins cursor-pointer">
              Clear Cart
            </button>
            <div className="text-right w-1/2">
              <div className=" flex justify-between ">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
               
              </div>
              <button className="mt-7 rounded-[10px] bg-black text-white px-6 py-3 w-full font-poppins">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartProducts;
