import WeatherForecast from './../interfaces/WeatherForecast';
import MushroomResponse from '../interfaces/MushroomResponse';

export default class MushroomInformer {
    private weekWeather: Array<WeatherForecast>;

    constructor(weekWeather: Array<WeatherForecast>) {
        this.weekWeather = weekWeather
    }

    private getRainyDaysOfWeek = ():Array<WeatherForecast> => {
        let rainyDays = this.weekWeather.filter(day => day.status === 2);

        return rainyDays;
    }

    private getAvarageOfWeeklyTemperature = (): number => {
        let sum: number = 0;
        let avarage: number = 0;
        Array.isArray(this.weekWeather) && this.weekWeather.map(day => sum += day.degree);
        avarage = sum / this.weekWeather.length;

        return avarage
    }

    private getLastDayOfRainfall = (arrayOfRainyDays: Array<WeatherForecast>):number => {
        let dayIndex: number = -1;
        Array.isArray(arrayOfRainyDays) && this.weekWeather.map((day, index) => dayIndex = day.status === 2 ? index : dayIndex);

        return dayIndex
    }

    public getMushroomInfo = (): MushroomResponse => {
        let temperatureAvarage: number = this.getAvarageOfWeeklyTemperature();
        let rainyDaysArray: Array<WeatherForecast> = this.getRainyDaysOfWeek();
        let lastDayOfRainfall: number = this.getLastDayOfRainfall(rainyDaysArray);
        let statusText: string, theBestDayToMushroomPickng: number, percent: string;

        statusText = temperatureAvarage >= 25 && rainyDaysArray.length >= 4 
        ? 'wysoki' 
        :  temperatureAvarage >= 15 && temperatureAvarage < 25 && rainyDaysArray.length >= 2 
        ? 'średni' 
        : 'niski'

        percent = temperatureAvarage >= 25 && rainyDaysArray.length >= 4 
        ? 'powyżej 60%' 
        :  temperatureAvarage >= 15 && temperatureAvarage < 25 && rainyDaysArray.length >= 2 
        ? '30% - 60%' 
        : 'do 30%';

        theBestDayToMushroomPickng = lastDayOfRainfall > -1 ? lastDayOfRainfall + 3 : lastDayOfRainfall

        return {
            lastDayOfRainfall,
            percent: percent,
            statusText,
            theBestDayToMushroomPickng: theBestDayToMushroomPickng
        }
    }

}