import axios from 'axios';

// this file holds your frontend network request adapters
// think about each function as a service that provides data
// to your React UI through AJAX calls

// for example, if we need to display a list of users
// we'd probably want to define a getUsers service like this:

/* 
  export async function getUsers() {
    try {
      const { data: users } = await axios.get('/api/users')
      return users;
    } catch(err) {
      console.error(err)
    }
  }
*/

export async function getAPIHealth() {
  try {
    const { data } = await axios.get('/api/health');
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
}

// lets grab the checkout cart for the checkout screen
// eventually, you'd probably want separate files for separate DB entities
// but for now, all in the same file is great

export async function getCheckoutCart(shopSessionId) {
  try {
    const { data } = await axios.get(`/api/shop/${shopSessionId}/checkout`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUserById() {
  try {
    const { data } = await axios.get(`/api/users`)
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