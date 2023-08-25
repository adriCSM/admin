class PaymentHandler {
  constructor(midtransService, validator) {
    this.midtransService = midtransService;
    this.validator = validator;
  }

  async sendDonationHandler(request, h) {
    const transaction = await this.midtransService.sendDonation(request.payload);
    return h
      .response({
        status: 'success',
        transaction,
      })
      .code(200);
  }
}

export default PaymentHandler;
