# Weather Comparer
A location (zip-code) based weather comparer web page - created as a coding exercise for Elevate Funding Job Application. It allows you to compare current weather in upto 4 different cities at once. This app is powered by OpenWeatherMap API (OpenWeatherMap API https://openweathermap.org/api). All weather data is provided by them.

## Demo

Please visit live website: https://lemon-pond-0e89fe10f.1.azurestaticapps.net

## Usage Instructions
- 4 components are provided on the web page. You may search any (united states) zip code for local current weather details of the city on the components.
- Use the Restart button to reset the cities searched and make new searches again.
- OpenWeatherMap API free tier limitations will apply. https://openweathermap.org/price


## Framework
ReactJS

## Resources Used
- OpenWeatherMap API https://openweathermap.org/api

## Libraries
- AXIOS for http calls
- Bootstrap css for styling


## Running Locally or Building on the Project
- Make sure npm is installed
- Clone the repository
- Create an account in OpenWeatherMap and obtain an api key. (It takes about 5-7 minutes for the api key to be activated and working)
- Modify the `REACT_APP_OPENWEATHER_APIKEY` value with your obtained api key in `.env.example` file and rename the file `.env`.
- In the terminal on the project root folder, use `npm start` to locally debug the project.

## Files

Majority of this application and its file structure is setup through `create-react-app`.

- App.js
  - Contains all custom code for the single page simple application.
- App.css
  - Contains styling mostly provided by `cra` defaults.
- assets
  - Contains any static assets used in this app.
- .env.example
  - A template to setup the environment variable for your own openweathermap api key.


## Deployment
- Deployed on Azure Static Web Page on above domain.
- CD implemented and environment set in GitHub Action. It was configured on container deployment on azure. (workflow/yml)
