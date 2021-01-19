import React, { useState, useEffect } from 'react';
import WeatherCards from "./Components/WeatherCards";
import {
  Button,
  Progress,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react"
import axios from 'axios'
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [isLocationExist, setIsLocationExist] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const onSuccessLocation =async(position) => {
    const location = `${position.coords.latitude}%2C${position.coords.longitude}`;
    localStorage.setItem('location', location);
    await getWeatherData(location);
    setIsLocationExist(true);
    setLoading(false);
  }

  const onErrorLocation = (err) => {
    setErrorMessage(`Failed to locate. Error: ${err.message}`);
  }

  const getWeatherData = async(location) => {
    setLoading(true);
    const url = `https://data.climacell.co/v4/timelines?location=${location}&fields=temperature&fields=weatherCode&timesteps=1d&units=metric&apikey=${process.env.REACT_APP_CLIMACELL_API_KEY}`;
    try{
      const response = await axios.get(url);
      if(response.data){
        setWeatherData(response.data.data.timelines[0].intervals.slice(0,7));
        console.log(response.data.data.timelines[0].intervals.slice(0,7));
        setLoading(false);
      }
    }catch(error){
      console(error.message);
    }

  }

  const getLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(onSuccessLocation, onErrorLocation);
    } else {
      setErrorMessage('Sorry. Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    const location = localStorage.getItem('location');
    if (location) {
      setIsLocationExist(true);
      getWeatherData(location);
    }
    setLoading(false);
  },[])

  return (
    <div>
      {
        loading === true ?
          (
            <Progress isIndeterminate hasStripe value={44} size="md" />
          ) :
          (
            <>
              {
                isLocationExist === false ?
                (
                  <div className="home">
                    {
                      errorMessage !== "" && (
                        <Alert status="error">
                          <AlertIcon />
                          <AlertTitle mr={2}>{errorMessage.split(".")[0]}.</AlertTitle>
                          <AlertDescription>{errorMessage.split(".")[1]}.</AlertDescription>
                          <CloseButton position="absolute" right="8px" top="8px" />
                        </Alert>
                      )
                    }
                    <Button colorScheme="teal" variant="outline" onClick={() => getLocation()}>
                      Get Current Location Weather
                      </Button>
                  </div>
                ) :
                (
                  <>
                    {weatherData.length > 0 ?
                    (
                      <>
                        <WeatherCards weatherData={weatherData}/>
                      </>
                    ):
                    (
                      <></>
                    )}
                  </>
                )
              }
            </>
          )
      }
    </div>
  );
}

export default App;
