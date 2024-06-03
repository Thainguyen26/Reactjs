import Joi from 'joi'

const schemasProduct = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  price: Joi.number().required().min(0),
  description: Joi.string().allow('', null)
})

export default schemasProduct
