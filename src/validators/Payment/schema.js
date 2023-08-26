import Joi from 'joi';

const message = {
  'string.empty': '{#label} is required',
};

const paymentPayloadSchema = Joi.object({
  firstName: Joi.string().required().message(message),
  lastName: Joi.string().required().message(message),
  email: Joi.string()
    .email({ tlds: { allow: ['com', 'net', 'id', 'ac', 'uho'] } })
    .required()
    .message(message),
  grossAmount: Joi.number().required().options({ convert: false }).message(message),
});

export default paymentPayloadSchema;
