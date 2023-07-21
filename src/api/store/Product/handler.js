class ProductHandler {
  constructor(productsService, usersService, validator) {
    this.productService = productsService;
    this.usersService = usersService;
    this.validator = validator;
  }

  async postProductHandler(request, h) {
    const { image } = request.payload;
    const { id } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(id);
    this.validator.validatePostProductPayload(request.payload);
    this.validator.validateImageHeaders(image.hapi.headers);
    const productId = await this.productService.addProduct(request.payload);
    const response = h
      .response({
        status: 'success',
        message: 'Product berhasil di tambahkan',
        data: {
          productId,
        },
      })
      .code(201);
    return response;
  }

  async getAllProductHandler(request, h) {
    const products = await this.productService.getProducts();
    const response = h
      .response({
        status: 'success',
        data: {
          products: products.result,
        },
      })
      .code(200);
    return products.cache ? response.header('X-Data-Source', 'cache') : response;
  }

  async getProductHandler(request, h) {
    const { id } = request.params;
    const product = await this.productService.getProduct(id);
    return h
      .response({
        status: 'success',
        data: {
          product,
        },
      })
      .code(200);
  }

  async getMetadataImageHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    const { id: productId } = request.params;
    const metadata = await this.productService.getMetadata(productId);
    const response = h
      .response({
        status: 'success',
        data: metadata,
      })
      .code(200);
    return response;
  }

  async serchProductsHandler(request, h) {
    const { productName } = request.query;
    const products = await this.productService.searchProducts(productName);
    return h
      .response({
        status: 'success',
        data: {
          products,
        },
      })
      .code(200);
  }

  async putProductHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    this.validator.validatePuttProductPayload(request.payload);
    const { image } = request.payload;
    this.validator.validateImageHeaders(image.hapi.headers);
    const { id } = request.params;
    const productId = await this.productService.putProduct(id, request.payload);
    return h.response({
      status: 'success',
      message: 'Product berhasil diperbarui',
      productId,
    });
  }

  async deleteProductHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    const { id } = request.params;
    await this.productService.deleteProduct(id);
    return h.response({
      status: 'success',
      message: 'Product berhasil dihapus',
    });
  }
}

export default ProductHandler;
