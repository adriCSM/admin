const routes = (handler) => [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => handler.postAdminHandler(request, h),
  },
  {
    method: 'POST',
    path: '/users',
    handler: (request, h) => handler.postUserHandler(request, h),
  },
  {
    method: 'POST',
    path: '/users/collaborator',
    handler: (request, h) => handler.postUserCollaboratorHandler(request, h),
  },
  {
    method: 'GET',
    path: '/users',
    handler: (request, h) => handler.getUsersHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: (request, h) => handler.getUserByIdHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/users',
    handler: (request, h) => handler.putUserByIdHandler(request, h),
    options: {
      auth: 'allproject_jwt',
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
        maxBytes: 5120000,
      },
    },
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: (request, h) => handler.deleteUserByIdHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
];

export default routes;
