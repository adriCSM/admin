import Joi from 'joi';

const message = {
  'string.empty': '{#label} is required',
};

const UserPayloadSchema = Joi.object({
  username: Joi.string().required().messages(message),
  phoneNumber: Joi.string().length(12).required().messages(message),
  email: Joi.string()
    .email({ tlds: { allow: ['com', 'net', 'id', 'ac', 'uho'] } })
    .required()
    .messages(message),
  password: Joi.string()
    .min(8)
    .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)
    .required()
    .messages(message),
  confirmPassword: Joi.string().required().messages(message),
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
  image: Joi.required(),
});

export { UserPayloadSchema, putUserPayloadSchema };
