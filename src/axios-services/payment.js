import axios from 'axios';

export function getAllPayments() {
    try {
        const { data } = await axios.get(`/api/paymentdetails`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function paymentById() {
    try {
        const { data } = await axios.get(`/api/paymentdetails/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function createPayment() {
    try {
        const { data } = await axios.post(`/api/paymentdetails`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function updatePayment() {
    try {
        const { data } = await axios.patch(`/api/paymentdetails/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function deletePayment() {
    try {
        const { data } = await axios.delete(`/api/paymentdetails/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}