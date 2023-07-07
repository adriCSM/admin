const InvariantError = require('../../../Error/InvariantError');
const {
  postCertificatePayloadSchema,
  imageHeadersPayloadSchema,
  putCertificatePayloadSchema,
} = require('./schema');

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

module.exports = CertificateValidator;
