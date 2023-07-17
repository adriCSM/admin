import Joi from 'joi';

const postCertificatePayloadSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.required(),
});
const putCertificatePayloadSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.required(),
});

const imageHeadersPayloadSchema = Joi.object({
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

export { postCertificatePayloadSchema, putCertificatePayloadSchema, imageHeadersPayloadSchema };
