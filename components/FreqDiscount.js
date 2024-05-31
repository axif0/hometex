import React from 'react';

const ProductGroup = ({ product }) => {
  return (
    <div className="md:w-1/2">
      <h1 className="text-xl font-bold mb-2">Frequently bought together</h1>
      <div className="flex items-center mb-2">
        <input type="checkbox" checked readOnly className="mr-2" />
        <span className="font-semibold">
          This Item: {product.name} ({product.volume})
        </span>
        <span className="line-through ml-2">৳ {product.original_price}</span>
        <span className="text-red-500 ml-2">৳ {product.discounted_price}</span>
      </div>
      {/* Additional products can be rendered here similarly */}
      <div className="flex items-center mb-2">
        <input type="checkbox" checked readOnly className="mr-2" />
        <span className="font-semibold">
          Rajkonna Acne Fighting Facial Wash With Jojoba Beads (100 ml)
        </span>
        <span className="line-through ml-2">৳ 185.00</span>
        <span className="text-red-500 ml-2">৳ 157.00</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-lg font-bold">Total price: ৳ 256</span>
      </div>
      <button className="bg-pink-500 text-white px-3 py-1 rounded">ADD BOTH TO CART</button>
    </div>
  );
};

export default ProductGroup;
