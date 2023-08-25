import Joi from 'joi';

const paymentPayloadSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  grossAmount: Joi.number().required().options({ convert: false }),
});

export default paymentPayloadSchema;
