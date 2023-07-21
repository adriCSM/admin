import router from '@/router';
import store from '@/store';
import productService from '../services/app_store/product.service';
import handler from '../services/error-handler';

const initialState = { product: null, products: null, metadata: null };

export const productsStore = {
  namespaced: true,
  state: initialState,
  mutations: {
    products(state, products) {
      state.products = products;
    },
    product(state, product) {
      state.product = product;
    },
    metadata(state, metadata) {
      state.metadata = metadata;
    },

    contentValue(state, contentValue) {
      state.contentValue = contentValue;
    },
    cartProducts(state, cartProducts) {
      state.cartProducts = cartProducts;
    },
    delete(state, id) {
      state.products = state.products.filter((product) => product._id !== id);
    },
  },
  actions: {
    async getMetadataImageProduct({ commit }, id) {
      try {
        const response = await productService.getMetadata(id);
        commit('metadata', response);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async getProducts({ commit }) {
      try {
        store.commit('loading', true);
        const response = await productService.getProducts();
        commit('products', response);
        store.commit('loading', false);
      } catch (error) {
        handler.errorHandling(error);
      }
    },
    async getProduct({ commit }, id) {
      try {
        store.commit('loading', true);
        const response = await productService.getProduct(id);
        commit('product', response);
        store.commit('loading', false);
      } catch (error) {
        handler.errorHandling(error);
      }
    },
    async addProduct({ commit }, product) {
      try {
        store.commit('loading', true);
        const message = await productService.addProduct(product);
        const response = await productService.getProducts();
        commit('products', response);
        store.commit('loading', false);
        store.commit('success', message);
      } catch (error) {
        handler.errorHandling(error);
      }
    },

    async searchProduct({ commit }, query) {
      try {
        store.commit('loading', true);
        const response = await productService.searchProduct(query);
        commit('products', response.data.products);
        store.commit('loading', false);
      } catch (error) {
        handler.errorHandling(error);
      }
    },
    async editProduct({ commit }, payload) {
      try {
        commit;
        store.commit('loading', true);
        const message = await productService.updateProduct(payload);
        const response = await productService.getProducts();
        commit('products', response);
        store.commit('success', message);
        store.commit('loading', false);
        router.push({ name: 'Product' });
      } catch (error) {
        handler.errorHandling(error);
      }
    },
    async deleteProduct({ commit }, id) {
      try {
        store.commit('loading', true);
        const message = await productService.deleteProduct(id);
        store.commit('loading', false);
        store.commit('success', message);
        commit('delete', id);
      } catch (error) {
        handler.errorHandling(error);
      }
    },

    async addToCart({ commit }, product) {
      try {
        const response = await productService.addToCart(product);
        commit('message', response.message);
        const response1 = await productService.getProductsCart();
        commit('contentValue', response1.data.products.length);
        commit('cartProducts', response1.data.products);
        setTimeout(() => {
          commit('message', null);
        }, 5000);
      } catch (error) {
        handler.errorHandling(error);
      }
    },

    async getProductsCart({ commit }) {
      try {
        const response = await productService.getProductsCart();
        commit('contentValue', response.data.products.length);
        commit('cartProducts', response.data.products);
      } catch (error) {
        handler.errorHandling(error);
      }
    },

    //eslint-disable-next-line no-unused-vars
    async changeCountProduct({ commit }, product) {
      try {
        await productService.changeCountProduct(product);
      } catch (error) {
        handler.errorHandling(error);
      }
    },

    async deleteProductsCart({ commit }, productId) {
      try {
        const response = await productService.deleteProductsCart(productId);
        commit('message', response.message);
        const response1 = await productService.getProductsCart();
        commit('cartProducts', response1.data.products);
      } catch (error) {
        handler.errorHandling(error);
      }
    },
  },
};
