import { ProductType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Products({ productsData }: { productsData: ProductType[] }) {
  return (
    <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-[30px] mt-24">
      {productsData.map((product) => (
        <div key={product.id} className="flex flex-col ">
          <Link prefetch={false} href={`/product/${product.id}`} className="flex-1 flex justify-center items-center ">
            <Image
              width={300}
              height={400}
              src={product.image}
              alt={product.title}
            />
          </Link>

          <div className="flex flex-col">
            <h3 className="mt-5 truncate" title={product.title}>
             <Link prefetch={false} href={`/products/${product.id}`} >{product.title}</Link> 
            </h3>
            <span className="text-sm text-gray-500 mt-1">{product.category}</span>
            <p className="font-jost mt-1">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
