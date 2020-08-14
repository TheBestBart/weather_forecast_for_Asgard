export default class WeatherForecastGenerator {
    private miliseconds: Date;

    constructor() {
        this.miliseconds = new Date();
        // console.log(this.miliseconds);
        console.log(this.getWeatherToday());
    }

    public getWeatherToday = (): number => {
        let lastTwoNumbers: number = this.miliseconds.getMilliseconds() % 100;
        let getYear: number = this.miliseconds.getFullYear();
        console.log('getYear', getYear, this.miliseconds.getMilliseconds());
        let weather: number = Math.floor(getYear / (this.miliseconds.getMilliseconds()/ this.miliseconds.getDay()))
        weather = weather > 50  ? weather / this.miliseconds.getDay() : weather
        return Math.floor(weather);
    } 
}