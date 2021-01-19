import React from 'react';
import dayjs from 'dayjs';
import getIcon from '../WeatherIcons/icons'
import "../Styles/weathertoday.scss"

const WeatherToday = ({ currentWeather }) => {
    return (
        <>
            <div className="current-weather" key={currentWeather.startTime}>
                <div>
                    <p className="current-weather-day">{dayjs(currentWeather.startTime).format('dddd, DD MMMM YYYY')}</p>
                    <p className="current-weather-temp">
                        {Math.round(currentWeather.values.temperature)}
                        <span>°C</span>
                    </p>
                </div>
                <p className="current-weather-status">It's A {getIcon(currentWeather.values.weatherCode).text} Day</p>
                <img src={getIcon(currentWeather.values.weatherCode).icon} alt={getIcon(currentWeather.values.weatherCode).text} />
            </div>

        </>
    )
}

export default WeatherToday;