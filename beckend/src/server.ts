import express from 'express';
import bodyParser from "body-parser";
const app: express.Application = express();
import dotenv from 'dotenv'
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes/routes'

dotenv.config();
const port = process.env.PORT || 5000;
app.use(helmet({ dnsPrefetchControl: { allow: true }}))
 app.disable( 'x-powered-by' );

// Middlewares
app.use((req, res, next) => {
    res.removeHeader("X-Powered-By");
    res.setHeader( 'X-Powered-By', 'AsgardForecast' );
    next();
  });
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/weather-forecast', routes);

app.disable( 'x-powered-by' );
app.listen(port, () => console.log('Server up and running on http://localhost:5000'));

