import Products from "@/components/Products";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
export const dynamic = "force-static";

export default async function Home() {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
  return (
      <div className="flex flex-col items-center ">
        <h1 className="text-[42px]">Fashion</h1>
        <Breadcrumbs
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Fashion",
              href: "/",
            },
          ]}
        />
        <Products productsData={products} />
      </div>
  );
}
