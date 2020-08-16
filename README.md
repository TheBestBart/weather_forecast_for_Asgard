# weather_forecast_for_Asgard

##Description
App generates weather for Asgard by special algorithm that based on miliseconds and it is created by me. <br />
It gives us opportunity to generate weather also for week and based on this information you can find out when is the best day to pick mushrooms in the woods next to this city. <br />

##Structure
The Project is built in two parts: <br /> 
backend part is responsible for all funtionality of the app such as generating weather, calculating the best day to pick mushroom or sending data to client <br />
client part is responsible for communication with the server, sending request or displaying data in the browser. <br />

##Technologies 

####Frontend
React,
React Hooks
CSS
HTML
ES Standards
JavaScript

####Backend 
Node.js
Express.js
Typescript
modules npm
JavaScript

##To getting start with App
firstly, you need to clone this repository to folder in which you want to have it

### `git clone`  + repository path

and go to the directory of that project:

### `cd weather_forecast_for_Asgard/beckend`

next, you should install packages and dependencies:

### `npm i` 

and do the same in client folder:

### `cd client`
### `npm i` 

to run only the server you need to go to the backend directory path and use command: 

### `npm run server`

to run only the client you must go to client directory and use:

### `npm start`

to run both the server and client go to the backend directory path and use:
(this option is mostly recommended if you want to run entire app)

### `npm run dev`

## REST API endpoints

The server has three endpoint: <br />

### `/weather-forecast/today` - GET

It returns object of information of today weather: 
status - information of sky condition as 0 - 2 number,
statusText - information of sky condition as string. It is neeeded to display this info as text in browser
degree - information of degree of weather as number 

### `/weather-forecast/week` - POST

It gets info of today weather called `weather` as an object that has form like object that is sending by first endpoint.

It returns array of seven objects like object that is sending by first endpoint  

### `/weather-forecast/mushroom-info` - POST

it gets array of weather data for 7 days called `weekWeather` and return object of information of mushroom for this week

statusText: Information of chance of finding mushroom as string, this is needed to show it in browser
theBestDayToMushroomPiking: Information about the best day to finding mushrooms in string,
percent: Information of chance of finding mushroom in percent as string, 