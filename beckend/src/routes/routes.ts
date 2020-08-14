const router = require('express').Router();
import getForecastForToday from '../controllers/getForecastForTodayController'

router.get('/today', getForecastForToday );

export default router;