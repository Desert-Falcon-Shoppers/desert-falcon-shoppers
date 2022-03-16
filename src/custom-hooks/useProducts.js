import { useState, useEffect } from "react";
import { getAllProducts } from "../axios-services/product";

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async (e) => {
      try {
        const products = await getAllProducts();
        setError(null);
        setProducts(products);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const [error, setError] = useState(null);

  return { products };
}
