const routes = (handler) => [
  {
    method: 'POST',
    path: '/portofolio/projects',
    handler: (request, h) => handler.postProjectHandler(request, h),
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
    method: 'GET',
    path: '/portofolio/projects',
    handler: (request, h) => handler.getProjectsHandler(request, h),
  },
  {
    method: 'GET',
    path: '/portofolio/projects/{id}',
    handler: (request, h) => handler.getProjectHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/portofolio/projects/{id}',
    handler: (request, h) => handler.putProjectHandler(request, h),
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
    method: 'GET',
    path: '/portofolio/projects/metadata/{id}',
    handler: (request, h) => handler.getMetadataImageHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/portofolio/projects/{id}',
    handler: (request, h) => handler.deleteProjectHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
];

module.exports = routes;
