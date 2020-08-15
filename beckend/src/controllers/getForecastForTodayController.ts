import { Request, Response } from 'express';
import WeatherForecastGenerator from '../classes/WeatherForecastGenerator';

export default async (req: Request, res: Response) => {
    try{
        let wheatherForecastGenerator = new WeatherForecastGenerator();
        let response = wheatherForecastGenerator.getWeatherToday(0, false);

        return res.status(200).send({
            success: true,
            todayWeather: { ...response },
        })
    } catch (error) {
        console.log('getForecastForToday Error', error);

        return res.status(500).send({
            success: false,
            message: 'something went wrong...'
        })
    }
    
}