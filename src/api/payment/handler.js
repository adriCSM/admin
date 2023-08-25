class PaymentHandler {
  constructor(midtransService, validator) {
    this.midtransService = midtransService;
    this.validator = validator;
  }

  async sendDonationHandler(request, h) {
    request.headers.Authorization = `Basic ${Buffer.from(
      `${process.env.MIDTRANS_SERVER_KEY}:`,
    ).toString('base64')}`;
    this.validator.paymentPayload(request.payload);
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
