import axios from "axios";

export async function getAllProducts() {
  try {
    const {
      data: { products },
    } = await axios.get(`/api/product`);

    return products;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(productId) {
  try {
    const { data } = await axios.get(`/api/product/${productId}`);
    console.log("hi im,", data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function productByCategory() {
  try {
    const { data } = await axios.get(`/api/product/category`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function productByInv() {
  try {
    const { data } = await axios.get(`/api/product/inventory`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function createProduct() {
  try {
    const { data } = await axios.post(`/api/product`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function createInventory() {
  try {
    const { data } = await axios.post(`/api/product/inventory`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function createCategory() {
  try {
    const { data } = await axios.post(`/api/product/category`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function productInvById() {
  try {
    const { data } = await axios.get(`/api/product/inventory/:id`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateProduct() {
  try {
    const { data } = await axios.patch(`/api/product/:id`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProduct() {
  try {
    const { data } = await axios.delete(`/api/product/:id`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateProductInv() {
  try {
    const { data } = await axios.patch(`/api/product/inventory/:id`);
    return data;
  } catch (error) {
    console.error(error);
  }
}
