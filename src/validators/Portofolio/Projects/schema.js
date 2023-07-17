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

const imageHeadersPayloadScema = Joi.object({
  'content-type': Joi.string()
    .valid(
      'image/apng',
      'image/avif',
      'image/gif',
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/webp',
    )
    .required(),
}).unknown();

export { postProjectPayloadSchema, putProjectPayloadSchema, imageHeadersPayloadScema };
