const routes = (handler) => [
  {
    method: 'POST',
    path: '/donation',
    handler: (request, h) => handler.sendDonationHandler(request, h),
  },
];

export default routes;
