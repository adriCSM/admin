import Joi from 'joi';

const postProjectPayloadSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.required(),
  urlSite: Joi.string().required(),
});
const putProjectPayloadSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.required(),
  urlSite: Joi.string().required(),
});

export { postProjectPayloadSchema, putProjectPayloadSchema };
