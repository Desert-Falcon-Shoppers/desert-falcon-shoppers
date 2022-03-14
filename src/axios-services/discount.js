import axios from 'axios';

export function getAllDiscounts() {
    try {
        const { data } = await axios.get(`/api/discount`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function createDiscount() {
    try {
        const { data } = await axios.post(`/api/discount`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function discountById() {
    try {
        const { data } = await axios.get(`/api/discount/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function updateDiscount() {
    try {
        const { data } = await axios.patch(`/api/discount/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function deleteDiscount() {
    try {
        const { data } = await axios.delete(`/api/discount/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

