import InvariantError from '../../Error/InvariantError.js';
import imageHeadersPayloadSchema from './schema.js';

const ImageValidator = {
  validateImageHeaders: (payload) => {
    const validationResult = imageHeadersPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

export default ImageValidator;
