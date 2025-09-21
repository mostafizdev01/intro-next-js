import { IProduct } from "@/types/type";
import Image from "next/image";
import React from "react";


const ProductCard = ({ product }: {product: IProduct}) => {
    
  return (
    <div className="bg-white text-left rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Product Image */}
      <Image
      width={"100"}
      height={"100"}
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      {/* Product Content */}
      <div className="p-4">
        {/* Title & Price */}
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
        <p className="text-xl font-bold text-indigo-600 mt-2">${product.price}</p>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          <button className="flex-1 border border-indigo-600 text-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-50 transition">
            View Details
          </button>
          <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
