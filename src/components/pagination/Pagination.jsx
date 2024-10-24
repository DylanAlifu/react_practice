import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,description,thumbnail`
    );
    const response = await data.json();
    setProducts(response.products);
    setNumberOfPages(Math.ceil(response.total / LIMIT));
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        {/* Previous Button */}
        <span
          className={`text-3xl font-semibold cursor-pointer transition-colors duration-300 ${
            currentPage === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-blue-600 hover:text-blue-800"
          }`}
          onClick={handlePrevious}
        >
          {"<"}
        </span>

        {/* Page Numbers */}
        {[...Array(numberOfPages).keys()].map((index) => (
          <span
            key={index}
            className={`cursor-pointer px-4 py-2 rounded-lg text-lg transition-all duration-300 ${
              currentPage === index
                ? "bg-blue-500 text-white font-bold"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
            }`}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </span>
        ))}

        {/* Next Button */}
        <span
          className={`text-3xl font-semibold cursor-pointer transition-colors duration-300 ${
            currentPage === numberOfPages - 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-blue-600 hover:text-blue-800"
          }`}
          onClick={handleNext}
        >
          {">"}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
