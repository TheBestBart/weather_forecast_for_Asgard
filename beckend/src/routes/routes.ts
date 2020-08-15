const router = require('express').Router();
import getForecastForToday from '../controllers/getForecastForTodayController'
import getWeekWeather from '../controllers/getWeekWeatherController'
import getMushroomInfo from '../controllers/getMushroomInfoController'

router.get('/today', getForecastForToday);
router.post('/mushroom-info', getMushroomInfo);
router.post('/week', getWeekWeather);
export default router;