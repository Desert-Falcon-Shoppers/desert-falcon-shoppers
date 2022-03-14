import axios from "axios"

export function getAllCartItems() {
    try {
        const { data } = await axios.get(`/api/cart`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function createCart() {
    try {
        const { data } = await axios.post(`/api/cart`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function cartById() {
    try {
        const { data } = await axios.get(`/api/cart/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function updateCartItems() {
    try {
        const { data } = await axios.patch(`/api/cart/items/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function updateCartItems() {
    try {
        const { data } = await axios.delete(`/api/cart/items/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function deleteCartItems() {
    try {
        const { data } = await axios.delete(`/api/cart/items/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}
