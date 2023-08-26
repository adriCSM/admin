import Joi from 'joi';

const message = {
  'string.empty': '{#label} is required',
};

const paymentPayloadSchema = Joi.object({
  firstName: Joi.string().required().messages(message),
  lastName: Joi.string().required().messages(message),
  email: Joi.string()
    .email({ tlds: { allow: ['com', 'net', 'id', 'ac', 'uho'] } })
    .required()
    .messages(message),
  grossAmount: Joi.number().required().options({ convert: false }).messages(message),
});

export default paymentPayloadSchema;
