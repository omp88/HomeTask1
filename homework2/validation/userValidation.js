import Joi from '@hapi/joi';

export default function userValidation() {
  return (req, res, next) => {
    const schema = Joi.object({
      login: Joi.string()
        .min(5)
        .max(15)
        .required(),
      password: Joi.string()
        .pattern(/^([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*$/)
        .required(),
      age: Joi.number()
        .integer()
        .min(4)
        .max(130)
        .required(),
      isDeleted: Joi.boolean()
        .required(),
    });
    const { error } = schema.validate(req.body);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');
      res.status(422).json({ error: message });
    }
  };
}
