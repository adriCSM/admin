import Joi from 'joi';

const message = {
  'string.empty': '{#label} is required',
};

const PostAuthenticationPaylodSchema = Joi.object({
  email: Joi.string().email({ tlds: true }).required().messages(message),
  password: Joi.string().required().messages(message),
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
