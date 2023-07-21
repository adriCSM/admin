import Joi from 'joi';

const postContactPayloadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email({ tlds: true }),
  mobileNumber: Joi.string().required().min(11).max(12),
  message: Joi.string().required().max(500),
});

export default postContactPayloadSchema;
