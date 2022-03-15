import axios from 'axios';

export async function getAllPayments() {
    try {
        const { data } = await axios.get(`/api/paymentdetails`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function paymentById() {
    try {
        const { data } = await axios.get(`/api/paymentdetails/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function createPayment() {
    try {
        const { data } = await axios.post(`/api/paymentdetails`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function updatePayment() {
    try {
        const { data } = await axios.patch(`/api/paymentdetails/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function deletePayment() {
    try {
        const { data } = await axios.delete(`/api/paymentdetails/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}