import axios from 'axios';

export async function getAllDiscounts() {
    try {
        const { data } = await axios.get(`/api/discount`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function createDiscount() {
    try {
        const { data } = await axios.post(`/api/discount`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function discountById() {
    try {
        const { data } = await axios.get(`/api/discount/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function updateDiscount() {
    try {
        const { data } = await axios.patch(`/api/discount/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function deleteDiscount() {
    try {
        const { data } = await axios.delete(`/api/discount/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

