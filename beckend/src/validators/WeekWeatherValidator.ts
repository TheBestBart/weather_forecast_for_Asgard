const Joi = require('@hapi/joi');

export default class FirstDatWeatherValidator {
    public static validateWeather = (data: object): any => {
        const schema = Joi.object({
            weekWeather: Joi.array().items(Joi.object({
                status: Joi.number().required(),
                statusText: Joi.string().required(),
                degree: Joi.number().required(),
            }))
        });
    
        return schema.validate(data);
    }
} 
