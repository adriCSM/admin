import Joi from 'joi';

const message = {
  'string.empty': ' {#label} tidak boleh kosong',
  'string.email': 'Email tidak valid',
  'string.max': '{#label} maksimal {#limit} karakter',
  'string.min': '{#label} minimal {#limit} karakter',
  'string.pattern.base': 'Mobile number tidak valid',
};

const postContactPayloadSchema = Joi.object({
  name: Joi.string().required().messages(message),
  email: Joi.string()
    .email({ tlds: { allow: ['com', 'net', 'id', 'ac', 'uho'] } })
    .required()
    .messages(message),
  mobileNumber: Joi.string()
    .pattern(/^(08|\+628)/)
    .min(11)
    .max(12)
    .required()
    .messages(message),
  message: Joi.string().max(500).required().messages(message),
});

export default postContactPayloadSchema;
