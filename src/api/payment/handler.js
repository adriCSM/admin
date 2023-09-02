class PaymentHandler {
  constructor(midtransService, validator) {
    this.midtransService = midtransService;
    this.validator = validator;
  }

  async sendDonationHandler(request, h) {
    this.validator.paymentPayload(request.payload);
    const transaction = await this.midtransService.sendDonation(request.payload);
    const response = h.response({
      status: 'success',
      transaction,
    });
    response.code(200);
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    return response;
  }
}

export default PaymentHandler;
