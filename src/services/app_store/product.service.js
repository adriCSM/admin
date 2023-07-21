import axios from 'axios';
import authHeader from '../auth-header';
export default {
  async getProducts() {
    const response = await axios.get('/store/products', {
      headers: await authHeader(),
    });
    return response.data.data.products;
  },
  async addProduct(product) {
    console.log(product);
    const response = await axios.post(
      '/store/products',
      { ...product },
      {
        headers: await authHeader(),
      },
    );
    return response.data.message;
  },

  async searchProduct(query) {
    const response = await axios.get(`/store/products/?productName=${query}`);
    return response.data;
  },

  async addToCart(product) {
    const response = await axios.post(
      '/carts',
      {
        id: product.productId,
        count: product.count,
      },
      {
        headers: await authHeader(),
      },
    );
    return response.data;
  },

  async getProductsCart() {
    const response = await axios.get('/store/carts/products', {
      headers: await authHeader(),
    });

    return response.data;
  },

  async changeCountProduct(product) {
    const response = await axios.put(
      '/carts',
      {
        id: product.productId,
        count: product.count,
      },
      {
        headers: await authHeader(),
      },
    );

    return response.data;
  },
  async deleteProductsCart(productId) {
    const response = await axios.delete('/store/carts/' + productId, {
      headers: await authHeader(),
    });
    return response.data;
  },
};
