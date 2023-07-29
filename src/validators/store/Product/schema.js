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

const ImageHeadersSchema = Joi.object({
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

export { PostProductPayloadSchema, ImageHeadersSchema, PutProductPayloadSchema };
