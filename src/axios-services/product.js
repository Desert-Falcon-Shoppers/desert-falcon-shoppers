import axios from 'axios';

export function getAllProducts() {
    try {
        const { data } = await axios.get(`/api/product`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function productByCategory() {
    try {
        const { data } = await axios.get(`/api/product/category`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function productByInv() {
    try {
        const { data } = await axios.get(`/api/product/inventory`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function createProduct() {
    try {
        const { data } = await axios.post(`/api/product`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function createInventory() {
    try {
        const { data } = await axios.post(`/api/product/inventory`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function createCategory() {
    try {
        const { data } = await axios.post(`/api/product/category`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function productById() {
    try {
        const { data } = await axios.get(`/api/product/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function productInvById() {
    try {
        const { data } = await axios.get(`/api/product/inventory/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function updateProduct() {
    try {
        const { data } = await axios.patch(`/api/product/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function deleteProduct() {
    try {
        const { data } = await axios.delete(`/api/product/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function updateProductInv() {
    try {
        const { data } = await axios.get(`/api/product/inventory/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}