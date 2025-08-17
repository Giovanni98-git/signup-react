import React, { useEffect } from "react";
import { useState } from "react";
import productsList from "../assets/productsData.json";
import ProductCard from "./Cards";

export default function Products() {
  const { products } = productsList;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [filterProducts, setFilterProducts] = useState(products);
  const allCategories = products.reduce((acc, product) => {
    if (!acc.includes(product.category)) {
      acc.push(product.category);
    }
    return acc;
  }, []);

  const availabilities = products.reduce((acc, product) => {
    if (!acc.includes(product.availability)) {
      acc.push(product.availability);
    }
    return acc;
  }, []);

  useEffect(() => {
    let filtered = products;

    if (searchTerm && searchTerm.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory && selectedCategory.trim() !== "") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedAvailability && selectedAvailability.trim() !== "") {
      filtered = filtered.filter(
        (product) => product.availability === selectedAvailability
      );
    }

    setFilterProducts(filtered);
  }, [products, searchTerm, selectedAvailability, selectedCategory]);

  return (
    <div className="flex flex-col items-center h-full w-full gap-6 ">
      <div className=" w-[98%] sm:w-[94%] md:w-[90%] flex gap-4 justify-center items-center bg-[#F0F0F0] rounded-2xl shadow-lg">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center p-4 sm:p-6 w-11/12 ">
          <input
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            type="text"
            className="shadow appearance-none border border-gray-400 sm:text-xl text-lg rounded-xl w-full p-1 sm:p-3 text-gray-700 focus:outline-none focus:shadow-outline"
          />
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
            className="border border-gray-400 text-gray-700 sm:text-xl text-lg rounded-xl block w-full p-1 sm:p-3 shadow appearance-none focus:outline-none focus:shadow-outline"
          >
            <option value="">Choose a category</option>
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            id="availability"
            value={selectedAvailability}
            onChange={(e) => {
              setSelectedAvailability(e.target.value);
            }}
            className=" border border-gray-400 text-gray-700 sm:text-xl text-lg rounded-xl block w-full p-1 sm:p-3 shadow appearance-none focus:outline-none focus:shadow-outline"
          >
            <option value="">Availability</option>
            {availabilities.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className=" w-[98%] sm:w-[94%] md:w-[90%] flex gap-4 justify-center bg-[#F0F0F0] items-center rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 w-full">
          {filterProducts.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
}
