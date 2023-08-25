import InvariantError from '../../Error/InvariantError.js';
import paymentPayloadSchema from './schema.js';

const PaymentValidator = {
  paymentPayload: (payload) => {
    const validationResult = paymentPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

export default PaymentValidator;
