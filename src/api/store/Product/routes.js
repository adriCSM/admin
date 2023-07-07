const routes = (handler) => [
  {
    method: 'POST',
    path: '/store/products',
    handler: (request, h) => handler.postProductHandler(request, h),
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
        maxBytes: 512000,
      },
      auth: 'allproject_jwt',
    },
  },
  {
    method: 'GET',
    path: '/store/products',
    handler: (request, h) => handler.getAllProductHandler(request, h),
  },
  {
    method: 'GET',
    path: '/store/products/{id}',
    handler: (request, h) => handler.getProductHandler(request, h),
  },
  {
    method: 'GET',
    path: '/store/products/',
    handler: (request, h) => handler.serchProductsHandler(request, h),
  },
  {
    method: 'PUT',
    path: '/store/products/{id}',
    handler: (request, h) => handler.putProductHandler(request, h),
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
        maxBytes: 512000,
      },
      auth: 'allproject_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/store/products/{id}',
    handler: (request, h) => handler.deleteProductHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
];
module.exports = routes;
