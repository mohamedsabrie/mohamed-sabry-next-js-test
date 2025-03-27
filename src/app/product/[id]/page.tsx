import ProductDetails from "@/components/ProductDetails";
import { ProductType } from "@/lib/types";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const products: ProductType[] = await fetch(
    "https://fakestoreapi.com/products"
  ).then((res) => res.json());
  return products.map((products) => ({
    id: String(products.id),
  }));
}

// Fix the params type in ProductPage
async function ProductPage({ params }: {   params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const productData = await data.json();
  const { image } = productData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
      <div className="flex justify-center">
        <Image
          width={400}
          height={600}
          src={image}
          alt="product image"
          className="object-contain w-auto h-auto max-h-[600px]"
        />
      </div>
      <ProductDetails productData={productData} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await data.json();

  return {
    title: `${product.title} | FASCO Store`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

export default ProductPage;
