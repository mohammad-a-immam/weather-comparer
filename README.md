# Weather Comparer

A zip code location based weather comparer web page, created as a coding exercise for Elevate Funding Job Application.

## Demo

Please visit live website: https://lemon-pond-0e89fe10f.1.azurestaticapps.net

## Usage Instructions
- OpenWeatherMap API free tier limitations will apply. https://openweathermap.org/price
- You may search any united states zip code for current weather details for the city
on the provided 4 weather comparison components. This allows you to compare current weather in upto
4 different cities at once.
- Use the Restart button to reset the cities searched and implement a new search.

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
- Create an account in OpenWeatherMap and obtain an api key. (It takes about 5-7 minutes for the api key to be 
activated and working)
- Modify the `REACT_APP_OPENWEATHER_APIKEY` value with your obtained api key.
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
- CD implemented and environment set through by GitHub Action when deploying the container. (workflow/yaml)