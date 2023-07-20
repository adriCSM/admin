const routes = (handler) => [
  {
    method: 'POST',
    path: '/portofolio/cv',
    handler: (request, h) => handler.addCvHandler(request, h),
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
    path: '/portofolio/cv',
    handler: (request, h) => handler.getCvHandler(request, h),
  },
  {
    method: 'GET',
    path: '/portofolio/cv/metadata/{id}',
    handler: (request, h) => handler.getCvMetadataHandler(request, h),
  },
  {
    method: 'GET',
    path: '/portofolio/cvs',
    handler: (request, h) => handler.getCvsHandler(request, h),
  },
  {
    method: 'PUT',
    path: '/portofolio/cv/{id}',
    handler: (request, h) => handler.putCvHandler(request, h),
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
    path: '/portofolio/cv/{id}',
    handler: (request, h) => handler.deleteCvHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
];

export default routes;
