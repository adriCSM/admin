const routes = (handler) => [
  {
    method: 'GET',
    path: '/store/carts',
    handler: (request, h) => handler.getProductsInCartHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
  {
    method: 'POST',
    path: '/store/carts',
    handler: (request, h) => handler.postCartHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/store/carts',
    handler: (request, h) => handler.putCountProductOnCartHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },

  {
    method: 'DELETE',
    path: '/store/carts/{id}',
    handler: (request, h) => handler.deleteProductInCartHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
];

export default routes;
