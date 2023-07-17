import InvariantError from '../../../Error/InvariantError.js';

import { PostProductPayloadSchema, ImageHeadersSchema, PutProductPayloadSchema } from './schema.js';

const ProductValidator = {
  validatePostProductPayload: (payload) => {
    const validationResult = PostProductPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateImageHeaders: (payload) => {
    const validationResult = ImageHeadersSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePuttProductPayload: (payload) => {
    const validationResult = PutProductPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};
export default ProductValidator;
