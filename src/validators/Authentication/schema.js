import Joi from 'joi';

const PostAuthenticationPaylodSchema = Joi.object({
  email: Joi.string().email({ tlds: true }).required(),
  password: Joi.string().required(),
});
const PutAuthenticationPaylodaSchema = Joi.object({
  refreshToken: Joi.string().required(),
});
const DeleteAuthenticationPaylodaSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

export {
  PostAuthenticationPaylodSchema,
  PutAuthenticationPaylodaSchema,
  DeleteAuthenticationPaylodaSchema,
};
