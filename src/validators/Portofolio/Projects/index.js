const InvariantError = require('../../../Error/InvariantError');
const {
  postProjectPayloadSchema,
  putProjectPayloadSchema,
  imageHeadersPayloadScema,
} = require('./schema');

const ProjectValidator = {
  validatePostProjectPayload: (payload) => {
    const validationResult = postProjectPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePutProjectPayload: (payload) => {
    const validationResult = putProjectPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateImageHeadersPayload: (payload) => {
    const validationResult = imageHeadersPayloadScema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = ProjectValidator;
