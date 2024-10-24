import React from "react";

const ProductCard = ({ title, description, price, thumbnail }) => {
  return (
    <div className="flex flex-col m-5 p-4 border border-slate-200 rounded-lg w-[320px] h-[420px] items-center justify-between transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl">
      <img
        src={thumbnail}
        alt={title}
        className="w-40 h-40 rounded-lg object-cover mb-4"
      />
      <div className="flex flex-col justify-between flex-1">
        <div className="ml-2">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-sm text-gray-500 mb-6 line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-auto">
          <p className="text-lg font-semibold text-blue-500">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
