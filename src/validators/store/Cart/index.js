import InvariantError from '../../../Error/InvariantError.js';
import CartPostPayloadSchema from './schema.js';

const CartValidator = {
  validateCartPostPayload: (payload) => {
    const validationResult = CartPostPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};
export default CartValidator;
