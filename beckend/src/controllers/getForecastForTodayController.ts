import { Request, Response } from 'express';
import WeatherForecastGenerator from '../classes/WeatherForecastGenerator';

export default async (req: Request, res: Response) => {
    try{
        let wheatherForecastGenerator = new WeatherForecastGenerator();

        return res.status(200).send({
            message: 'success'
        })
    } catch (error) {
       
    }
    
}