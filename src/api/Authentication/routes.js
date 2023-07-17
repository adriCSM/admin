const routes = (handler) => [
  {
    method: 'POST',
    path: '/auth',
    handler: (request, h) => handler.postAuthenticationHandler(request, h),
  },
  {
    method: 'PUT',
    path: '/auth',
    handler: (request, h) => handler.putAuthenticationHandler(request, h),
  },
  {
    method: 'DELETE',
    path: '/auth/{refreshToken}',
    handler: (request, h) => handler.deleteAuthenticationHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
];

export default routes;
