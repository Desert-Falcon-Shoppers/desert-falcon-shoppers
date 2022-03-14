import axios from 'axios';

export function getAllOrderDetails() {
    try {
        const { data } = await axios.get(`/api/order/details`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function getAllOrderItems() {
    try {
        const { data } = await axios.get(`/api/order/items`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function orderDetailsById() {
    try {
        const { data } = await axios.get(`/api/order/details/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function orderItemsById() {
    try {
        const { data } = await axios.get(`/api/order/items/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function createOrderItems() {
    try {
        const { data } = await axios.post(`/api/order/items`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function createOrderDetails() {
    try {
        const { data } = await axios.post(`/api/order/details`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function updateOrderItems() {
    try {
        const { data } = await axios.patch(`/api/order/items/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function updateOrderDetails() {
    try {
        const { data } = await axios.patch(`/api/order/details/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function deleteOrderDetails() {
    try {
        const { data } = await axios.delete(`/api/order/details/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function deleteOrderItems() {
    try {
        const { data } = await axios.delete(`/api/order/items/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}