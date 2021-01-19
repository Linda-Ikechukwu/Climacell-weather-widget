import React from 'react';
import dayjs from 'dayjs';

const WeatherCards = ({weatherData}) =>{
  return(
    <>
      {weatherData.map((day,i) =>{
        return(
          <div key={day.startTime}>
            <p>{dayjs(day.startTime).format('dddd')}</p>
            <p>{dayjs(day.startTime).format('MMMM DD')}</p>
            <p>{Math.round(day.values.temperature)}</p>
          </div>
        )
      })}
    </>
  )
}

export default WeatherCards;