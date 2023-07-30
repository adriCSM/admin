import Joi from 'joi';

const postCvPayloadSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.required(),
});
const putCvPayloadSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.required(),
});

export { postCvPayloadSchema, putCvPayloadSchema };
