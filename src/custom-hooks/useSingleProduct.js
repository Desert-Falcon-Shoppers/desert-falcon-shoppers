import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../axios-services/product";

export function useSingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchSingleProduct = async (e) => {
      try {
        const product = await getProductById(productId);
        setError(null);
        setProduct(product);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };

    fetchSingleProduct();
  }, []);

  const [error, setError] = useState(null);

  return { product };
}
