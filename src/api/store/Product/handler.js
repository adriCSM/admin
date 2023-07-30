class ProductHandler {
  constructor(productsService, usersService, validator, imageValidator) {
    this.productService = productsService;
    this.usersService = usersService;
    this.validator = validator;
    this.imageValidator = imageValidator;
  }

  async postProductHandler(request, h) {
    const { image } = request.payload;
    const { id } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(id);
    this.validator.validatePostProductPayload(request.payload);
    this.imageValidator.validateImageHeaders(image.hapi.headers);
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

  async searchProductsHandler(request, h) {
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
    this.imageValidator.validateImageHeaders(image.hapi.headers);
    const { id } = request.params;
    const productId = await this.productService.putProduct(id, request.payload);
    return h
      .response({
        status: 'success',
        message: 'Product berhasil diperbarui',
        productId,
      })
      .code(200);
  }

  async deleteProductHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    const { id } = request.params;
    await this.productService.deleteProduct(id);
    return h
      .response({
        status: 'success',
        message: 'Product berhasil dihapus',
      })
      .code(200);
  }

  async putEvaluationHandler(request, h) {
    const { star } = request.payload;
    const { id: productId } = request.params;
    await this.productService.evaluation(productId, star);
    return h
      .response({
        status: 'success',
        message: 'Berhasil memberikan penilaian',
      })
      .code(200);
  }

  async putFavoriteHandler(request, h) {
    const { id: productId } = request.params;
    await this.productService.favorite(productId);
    return h
      .response({
        status: 'success',
        message: 'Berhasil menambahkan favorite',
      })
      .code(200);
  }
}

export default ProductHandler;
