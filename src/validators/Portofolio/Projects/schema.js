const Joi = require('joi');

const postProjectPayloadSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.required(),
  url_site: Joi.string().required(),
});
const putProjectPayloadSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.required(),
  url_site: Joi.string().required(),
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

module.exports = { postProjectPayloadSchema, putProjectPayloadSchema, imageHeadersPayloadScema };
