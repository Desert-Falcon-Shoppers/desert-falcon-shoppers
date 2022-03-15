import axios from 'axios';

export async function getAllOrderDetails() {
    try {
        const { data } = await axios.get(`/api/order/details`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function getAllOrderItems() {
    try {
        const { data } = await axios.get(`/api/order/items`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function orderDetailsById() {
    try {
        const { data } = await axios.get(`/api/order/details/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function orderItemsById() {
    try {
        const { data } = await axios.get(`/api/order/items/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function createOrderItems() {
    try {
        const { data } = await axios.post(`/api/order/items`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function createOrderDetails() {
    try {
        const { data } = await axios.post(`/api/order/details`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function updateOrderItems() {
    try {
        const { data } = await axios.patch(`/api/order/items/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function updateOrderDetails() {
    try {
        const { data } = await axios.patch(`/api/order/details/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function deleteOrderDetails() {
    try {
        const { data } = await axios.delete(`/api/order/details/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function deleteOrderItems() {
    try {
        const { data } = await axios.delete(`/api/order/items/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}