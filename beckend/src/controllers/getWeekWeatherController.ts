import { Request, Response } from 'express';
import WeatherForecastGenerator from '../classes/WeatherForecastGenerator';
import FirstDatWeatherValidator from '../validators/FirstDayWeatherValidator';

export default async (req: Request, res: Response) => {
    try{
        let { weather } = req.body;
        let { error } = FirstDatWeatherValidator.validateWeather(req.body);
        
        if(error) return res.status(500).send({
            success: false,
            message: error.details[0].message
        });
       
        let wheatherForecastGenerator = new WeatherForecastGenerator();
        let response = wheatherForecastGenerator.getWeekWeather(weather);

        return res.status(200).send({
            success: true,
            weekWeather: [ ...response ],
        })
    } catch (error) {
        console.log('getForecastForToday Error', error);

        return res.status(500).send({
            success: false,
            message: 'something went wrong...'
        })
    }
    
}