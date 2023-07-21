import Joi from 'joi';

const postContactPayloadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  mobileNumber: Joi.string().required(),
  message: Joi.string().required(),
});

export default postContactPayloadSchema;
