import InvariantError from '../../../Error/InvariantError.js';
import { postProjectPayloadSchema, putProjectPayloadSchema } from './schema.js';

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
};

export default ProjectValidator;
