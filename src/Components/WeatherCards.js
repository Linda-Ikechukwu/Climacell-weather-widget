import React from 'react';
import dayjs from 'dayjs';
import getIcon from '../WeatherIcons/icons'
import "../Styles/weathercard.scss"

const WeatherCards = ({weatherData}) =>{
  return(
    <>
      {weatherData.map((day,i) =>{
        return(
          <div className="weather-card" key={day.startTime}>
            <p className="weather-card-day">{dayjs(day.startTime).format('dddd')}</p>
            <p>{dayjs(day.startTime).format('MMMM DD')}</p>
            <img src={getIcon(day.values.weatherCode).icon} alt={getIcon(day.values.weatherCode).text}/>
            <p className="weather-card-temp">{Math.round(day.values.temperature)}°C</p>
            <p>{getIcon(day.values.weatherCode).text}</p>
          </div>
        )
      })}
    </>
  )
}

export default WeatherCards;