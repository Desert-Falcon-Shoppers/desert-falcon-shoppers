import axios from 'axios';

export function allShoppingSessions() {
    try {
        const { data } = await axios.get(`/api/shop`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function allShoppingSessions() {
    try {
        const { data } = await axios.post(`/api/shop`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function buildCheckoutCart() {
    try {
        const { data } = await axios.get(`/api/shop/:id/checkout`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function shopSessionById() {
    try {
        const { data } = await axios.get(`/api/shop`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function updateShopSession() {
    try {
        const { data } = await axios.patch(`/api/shop/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export function deleteShopSession() {
    try {
        const { data } = await axios.delete(`/api/shop/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function getCheckoutCart(shopSessionId) {
    try {
        const { data } = await axios.get(`/api/shop/${shopSessionId}/checkout`);
        return data;
    } catch (err) {
        console.error(err);
    }
}