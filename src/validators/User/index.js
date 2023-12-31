import InvariantError from '../../Error/InvariantError.js';
import { UserPayloadSchema, putUserPayloadSchema } from './schema.js';

const UserValidator = {
  validateUserPayload: (payload) => {
    const validationResult = UserPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePutUserPayload: (payload) => {
    const validationResult = putUserPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

export default UserValidator;
