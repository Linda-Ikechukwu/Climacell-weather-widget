import FreezingRain from './freezing-rain.svg';
import IcePellets from './ice-pellete.svg';
import Snow from './snow.svg';
import Thunderstorm from './thunderstorm.svg';
import RainHeavy from './rain-heavy.svg';
import Rain from '.rain-moderate.svg';
import Fog from './fog.svg';
import Cloudy from './cloudy.svg';
import PartlyCloudy from './partly-cloudy.svg';
import Clear from './clear-day.svg';

export function getIcon(weatherCode) {
    switch (weatherCode) {
        case 6000:
        case 6001:
        case 6200:
        case 6201:
            return {text:"Freezing Rain", icon:FreezingRain};
        case WEATHER_CODES.ICE_PELLETS_HEAVY:
        case WEATHER_CODES.ICE_PELLETS:
        case WEATHER_CODES.ICE_PELLETS_LIGHT:
            return {text:"Freezing Rain", icon:IcePellets};
        case WEATHER_CODES.SNOW_HEAVY:
        case WEATHER_CODES.SNOW:
        case WEATHER_CODES.SNOW_LIGHT:
        case WEATHER_CODES.FLURRIES:
            return Snow;
        case WEATHER_CODES.TSTORM:
            return Thunderstorm;
        case WEATHER_CODES.RAIN:
        case WEATHER_CODES.RAIN_LIGHT:
        case WEATHER_CODES.DRIZZLE:
            return Rain;
        case WEATHER_CODES.RAIN_HEAVY:
            return RainHeavy;
        case WEATHER_CODES.FOG_LIGHT:
        case WEATHER_CODES.FOG:
            return Fog;
        case WEATHER_CODES.CLOUDY:
        case WEATHER_CODES.MOSTLY_CLOUDY:
            return Cloudy;
        case WEATHER_CODES.PARTLY_CLOUDY:
        case WEATHER_CODES.MOSTLY_CLEAR:
            return PartlyCloudy;
        case WEATHER_CODES.CLEAR:
            return Clear;
        default:
            return null;
    }
}