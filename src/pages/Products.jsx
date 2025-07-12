import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center">
        Our Shoe Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.length === 0 ? (
          <p className="text-center col-span-full text-gray-300">
            No products found.
          </p>
        ) : (
          products.map((product) => {
            const encodedMessage = encodeURIComponent(
              `Hello Supaz! I'm interested in this shoe:\n\n🥿 *${product.name}*\n💰 *Ksh ${product.price}*\n📷 ${product.image}`
            );
            const whatsappLink = `https://wa.me/254746631707?text=${encodedMessage}`;

            return (
              <div
                key={product._id}
                className="bg-gray-800 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-yellow-400 font-bold mt-2">
                    Ksh {product.price}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 w-full"
                  >
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 w-full rounded transition">
                      Get This Shoe
                    </button>
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
