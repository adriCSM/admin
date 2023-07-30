import Joi from 'joi';

const PostProductPayloadSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  quantity: Joi.string().required(),
  image: Joi.required(),
  category: Joi.string().required(),
});

const PutProductPayloadSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  quantity: Joi.string().required(),
  category: Joi.string().required(),
  image: Joi.required(),
});

export { PostProductPayloadSchema, PutProductPayloadSchema };
