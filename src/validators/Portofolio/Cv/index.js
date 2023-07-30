import InvariantError from '../../../Error/InvariantError.js';
import { postCvPayloadSchema, putCvPayloadSchema } from './schema.js';

const CvValidator = {
  validatePostCvPayload: (payload) => {
    const validationResult = postCvPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePutCvPayload: (payload) => {
    const validationResult = putCvPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

export default CvValidator;
