import WeatherForecast from './../interfaces/WeatherForecast';
import WeatherStatus from './../interfaces/WeatherStatus'
let status = {
    sunny: {
        statusText: "słonecznie",
        status: 0,
    },
    cloudly: {
        statusText: "pochmurnie",
        status: 1,
    },
    rainly: {
        statusText: "deszczowo",
        status: 2
    } 
}

export default class WeatherForecastGenerator {
    private day: Date;
    private maxTemperature:  number;

    constructor(maxTemperature?: number) {
        this.day = new Date();
        this.maxTemperature = maxTemperature ? maxTemperature : 40;
    }

    private  getWeatherStatus = (day?: Date): WeatherStatus => {
        let lastNumber = day ? day.getMilliseconds() % 10 : this.day.getMilliseconds() % 10;
        let choosenStatus:WeatherStatus = lastNumber >= 6 ? status.sunny : lastNumber >= 3 && lastNumber < 6 ? status.cloudly : status.rainly

        return choosenStatus
    }

    public getWeatherToday = (yesterdayWeather:number = 0, generateNewDay?: boolean): WeatherForecast => {
        yesterdayWeather = yesterdayWeather > 0 && yesterdayWeather % 2 === 1 ? yesterdayWeather * (-1) : yesterdayWeather
        let day: Date = generateNewDay ? new Date(Date.now() + yesterdayWeather) : this.day
        let getYear: number = day.getFullYear();
        let milliseconds =  day.getMilliseconds();
        let thisDay = day.getDay();
        let lastNumber = milliseconds % 10  === 0 ? yesterdayWeather < 0 ? 1 : 2 : milliseconds % 10
        let weather: number = Math.floor(getYear / (milliseconds / (thisDay === 0 ? 7 : thisDay)))
        weather = weather > this.maxTemperature  ? this.maxTemperature / (thisDay === 0 ? lastNumber : thisDay) : weather;
        
        return {
            degree: Math.floor(weather),
            ...this.getWeatherStatus(day)
        }
    } 

    public getWeekWeather = (firstDayForecast: WeatherForecast): Array<WeatherForecast> => {
        let arrayOfWeather: Array<WeatherForecast> = [];
        arrayOfWeather.push(firstDayForecast);
        
        for(let i = 1; i < 7; i++) {
            let difference = (arrayOfWeather[i - 1].degree + this.maxTemperature) * (arrayOfWeather[i - 1].status + 1);
            let weatherThisDay: WeatherForecast = this.getWeatherToday(difference, true)

            arrayOfWeather.push(weatherThisDay);
        }

        return arrayOfWeather
    }
}