import axios from 'axios';


export async function getUserById() {
    try {
        const { data } = await axios.get(`/api/users/me`)
        return data
    } catch (error) {
        console.error(error);
    }
}


// userCredentials: { username, password }
export async function logInUser(userCredentials) {
    try {
        console.log({ userCredentials })
        const { data } = await axios.post(`/api/users/login`, userCredentials)
        return data
    } catch (error) {
        console.error(error)
    }
}

//sign up
export async function signUpUser(userCredentials) {
    try {
        const { data } = await axios.post(`api/users/register`, userCredentials)
        return data
    } catch (error) {
        console.error(error)
    }

}

// admin ability: find all users
export async function getAllUsers() {
    try {
        const { data } = await axios.get(`api/users`)
        return data
    } catch (error) {
        console.error(error)
    }
}

//user payment 
export async function userPayment() {
    try {
        const { data } = await axios.get(`api/users/userpayment`)
        return data
    } catch (error) {
        console.error(error)
    }
}

//user address
export async function userAddress() {
    try {
        const { data } = await axios.get(`/api/users/useraddress`)
        return data
    } catch (error) {
        console.error(error)
    }
}

// user address by id
export async function userAddressById() {
    try {
        const { data } = await axios.get(`/api/users/useraddress/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

//user paymnet id
export async function userPaymentById() {
    try {
        const { data } = await axios.get(`/api/users/userpayment/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

//update user payment
export async function updateUserPayment() {
    try {
        const { data } = await axios.patch(`/api/users/userpayment/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

//update user address
export async function updateUserAddress() {
    try {
        const { data } = await axios.patch(`/api/users/useraddress/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

//create user address
export async function createUserAddress() {
    try {
        const { data } = await axios.post(`api/users/useraddress`)
        return data
    } catch (error) {
        console.error(error)
    }
}

//create user payment
export async function createUserPayment() {
    try {
        const { data } = await axios.post(`api/users/userpayment`)
        return data
    } catch (error) {
        console.error(error)
    }
}


//delete a user
export async function deleteUser() {
    try {
        const { data } = await axios.delete(`api/users/:id`)
        return data
    } catch (error) {
        console.error(error)
    }
}

//delete user address
export async function deleteUserAddress() {
    try {
        const { data } = await axios.delete(`api/users/useraddress`)
        return data
    } catch (error) {
        console.error(error)
    }
}

//delete user payment
export async function deleteUserPayment() {
    try {
        const { data } = await axios.delete(`api/users/userpayment`)
        return data
    } catch (error) {
        console.error(error)
    }
}

