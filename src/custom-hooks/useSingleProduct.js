import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../axios-services/product'

export function useSingleProduct() {
    const { productId } = useParams()

    const [product, setProduct] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchSingleProduct() {
            try {
                const product = await getProductById(productId);
                setProduct(product)
            } catch (error) {
                setError(error);
                console.error(error)
            }
        }

        fetchSingleProduct()
    }, [])

    return { product }
}