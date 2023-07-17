const routes = (handler) => [
  {
    method: 'POST',
    path: '/portofolio/certificates',
    handler: (request, h) => handler.postCertificateHandler(request, h),
    options: {
      auth: 'allproject_jwt',
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
        maxBytes: 512000,
      },
    },
  },

  {
    method: 'GET',
    path: '/portofolio/certificates',
    handler: (request, h) => handler.getCertificatesHandler(request, h),
  },
  {
    method: 'GET',
    path: '/portofolio/certificates/{id}',
    handler: (request, h) => handler.getCertificateHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
  {
    method: 'GET',
    path: '/portofolio/certificates/metadata/{id}',
    handler: (request, h) => handler.getMetadataImageHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/portofolio/certificates/{id}',
    handler: (request, h) => handler.putCertificateHandler(request, h),
    options: {
      auth: 'allproject_jwt',
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
        maxBytes: 512000,
      },
    },
  },
  {
    method: 'DELETE',
    path: '/portofolio/certificates/{id}',
    handler: (request, h) => handler.deleteCertificateHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
];

export default routes;
