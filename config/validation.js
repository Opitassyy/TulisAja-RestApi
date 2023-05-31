const { date } = require('joi')
const Joi = require('joi')

const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(6).required()
    })

    return schema.validate(date)

}
const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(date);
}

nodule.exports.registerValidation = registerValidation
nodule.exports.loginValidation = loginValidation