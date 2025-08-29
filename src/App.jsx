import './App.css'
import { useState } from 'react'
import axios from 'axios';

function App() {
const [city, setCity] = useState('');
const [weatherData, setWeatherData] = useState({});

async function fetchWeatherData(){

  try {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=My api goes here but i'm posting this code publicly so i can't show my api key! :D`

    const response = await axios.get(apiUrl);

    const { data } = response

    console.log(data);

    setWeatherData(data)

  // We'll put our API call code here
} catch (error) {
  // And we'll handle any errors here
  console.error("An error has occured! ", error);
}

}

  return (
      <div>
       <h1>Weather App</h1>
       <input type='text' value={city} onChange={(event) => {setCity(event.target.value)}}></input>
       <button onClick={fetchWeatherData}>fetch</button>

         {weatherData.name ? (
          <div>
            <p>City: {weatherData.name}</p>
            <p>Temp: {weatherData.main.temp - 273.15} C</p>
          </div>
         ): null}


        </div>
      
  )
}

export default App
