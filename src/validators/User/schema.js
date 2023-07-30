import Joi from 'joi';

const UserPayloadSchema = Joi.object({
  username: Joi.string().required(),
  phoneNumber: Joi.string().length(12).required(),
  email: Joi.string()
    .email({ tlds: { allow: ['com', 'net', 'id', 'ac', 'uho'] } })
    .required(),
  password: Joi.string()
    .min(8)
    .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)
    .required(),
  confirmPassword: Joi.string().required(),
});

const putUserPayloadSchema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  phoneNumber: Joi.string().length(12).required(),
  gender: Joi.string().required(),
  birth: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: ['com', 'net', 'id', 'ac', 'uho'] } })
    .required(),
  password: Joi.string()
    .min(8)
    .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)
    .required(),
  confirmPassword: Joi.string().required(),
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

export { UserPayloadSchema, putUserPayloadSchema, imageHeadersPayloadSchema };
