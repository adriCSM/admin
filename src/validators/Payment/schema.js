import Joi from 'joi';

const messages = {
  'string.empty': '#{label} is required',
};

const paymentPayloadSchema = Joi.object({
  firstName: Joi.string().required().message(messages),
  lastName: Joi.string().required().message(messages),
  email: Joi.string()
    .email({ tlds: { allow: ['com', 'net', 'id', 'ac', 'uho'] } })
    .required()
    .message(messages),
  grossAmount: Joi.number().required().options({ convert: false }).message(messages),
});

export default paymentPayloadSchema;
