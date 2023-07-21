const routes = (handler) => [
  {
    path: '/portofolio/messages',
    method: 'POST',
    handler: (request, h) => handler.addMessageHandler(request, h),
  },
  {
    path: '/portofolio/messages',
    method: 'GET',
    handler: (request, h) => handler.getMessagesHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
  {
    path: '/portofolio/messages/{id}',
    method: 'DELETE',
    handler: (request, h) => handler.deleteMessageHandler(request, h),
    options: {
      auth: 'allproject_jwt',
    },
  },
];

export default routes;
