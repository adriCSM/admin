import InvariantError from '../../Error/InvariantError';
import paymentPayloadSchema from './schema';

const PaymentValidator = {
  paymentPayload: (payload) => {
    const validationResult = paymentPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

export default PaymentValidator;
