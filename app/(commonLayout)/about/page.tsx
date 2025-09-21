import ProductCard from "@/app/componets/products/CartProducts";
import { IProduct } from "@/types/type";
import { Metadata } from "next"


 export const metadata: Metadata = {
     title: "Product views",
     description: "This is products view page"
  }

 const  ProductPage = async () => {

  const res = await fetch('http://localhost:5000/product', {
    // track for (SSG) = static site generation
    // track: 01
    // cache: "force-cache" // => data gula cash korbe jno road hoite time na nei. new data pauyar jonno retry build korte hoy.
    
    // track: 02
    // next: {  // => 5 sec por por fetch methud ta call korbe and latest data gula show korbe. taile bar bar build korte hobe na.
    //   revalidate: 5 // pera =>:  but server er upor chap create hobe. and server crash korte pare..
    // tags: ["products"] // ata best => jokhon e ekta product ta create korle tokhon server a call korbe and new data ta show korbe browser a .
    // }

    // track for (SSR) = server site rendering
    // track: 01
    cache: "no-store"

  });
  const products = await res.json();

  return (
    <div className=" grid grid-cols-4 gap-10">
      {
        products.map((product: IProduct)=> <ProductCard product={product} key={product.id} />)
      }
    </div>
  )
}

export default ProductPage;