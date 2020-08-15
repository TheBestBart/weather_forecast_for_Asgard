import { Request, Response } from 'express';
import WeekWeatherValidator from '../validators/WeekWeatherValidator';
import MushroomInformer from '../classes/MushroomInformer';

export default async (req: Request, res: Response) => {
    try{
        let { weekWeather } = req.body;
        console.log('tydzien', weekWeather)
        let { error } = WeekWeatherValidator.validateWeather(req.body);
        console.log('error', error);
        if(error) return res.status(500).send({
            success: false,
            message: error.details[0].message
        });
       
        let mushroomInformer = new MushroomInformer(weekWeather);
        console.log(mushroomInformer.getMushroomInfo());

        return res.status(200).send({
            success: true,
            mushroomInfo: mushroomInformer.getMushroomInfo()
        })
    } catch (error) {
        console.log('getMushroomInfo Error', error);

        return res.status(500).send({
            success: false,
            message: 'something went wrong...'
        })
    }
    
}