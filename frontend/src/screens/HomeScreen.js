import React from "react";
import Product from "../components/Product";
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const products = [
    {
      id: 1,
      name: "Tshirt",
      description: "Tshirt description",
      price: 23,
    },
    {
      id: 1,
      name: "Tshirt",
      description: "Tshirt description",
      price: 23,
    },
    {
      id: 1,
      name: "Tshirt",
      description: "Tshirt description",
      price: 23,
    },
    {
      id: 1,
      name: "Tshirt",
      description: "Tshirt description",
      price: 23,
    },
    {
      id: 1,
      name: "Tshirt",
      description: "Tshirt description",
      price: 23,
    },
  ];

  return (
    <div className="px-36 py-10">
      <h1>Latest Products</h1>
      <div className="product-row">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Product product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
