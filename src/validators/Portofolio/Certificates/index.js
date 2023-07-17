import InvariantError from '../../../Error/InvariantError.js';
import {
  postCertificatePayloadSchema,
  imageHeadersPayloadSchema,
  putCertificatePayloadSchema,
} from './schema.js';

const CertificateValidator = {
  validatePostCertificatePayload: (payload) => {
    const validationResult = postCertificatePayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePutCertificatePayload: (payload) => {
    const validationResult = putCertificatePayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateImageHeadersPayload: (payload) => {
    const validationResult = imageHeadersPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

export default CertificateValidator;
