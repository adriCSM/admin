import InvariantError from '../../../Error/InvariantError.js';
import postContactPayloadSchema from './schema.js';

const ContactValidator = {
  validatePostContactPayload: (payload) => {
    const validationResult = postContactPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

export default ContactValidator;
