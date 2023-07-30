import Joi from 'joi';

const postCertificatePayloadSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.required(),
});
const putCertificatePayloadSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.required(),
});

export { postCertificatePayloadSchema, putCertificatePayloadSchema };
