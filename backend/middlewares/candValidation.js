const Joi = require('joi')

const candidateValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        phoneno: Joi.number().required(),
        position: Joi.string().required(),
        experience: Joi.string().required(),
        resume: Joi.string().required(), 
    })
    const {error} = schema.validate(req.body);
    if(error) {
        return res.status(400).json({message: "Bad request", error})
    }
    next();
}


module.exports = {
    candidateValidation
}