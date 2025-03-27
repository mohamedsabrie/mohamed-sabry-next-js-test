import CartProducts from '@/components/CartProducts'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import React from 'react'

function CartPage() {
  return (
    <div className="flex flex-col items-center ">
    <h1 className="text-4xl sm:text-[42px] mb-4">Shopping Cart</h1>
    <Breadcrumbs
      items={[
        {
          title: "Home",
          href: "/",
        },
        {
          title: "Your Shopping Cart",
          href: "/cart",
        },
      ]}
    />
    <CartProducts />
  </div>
  )
}

export default CartPage