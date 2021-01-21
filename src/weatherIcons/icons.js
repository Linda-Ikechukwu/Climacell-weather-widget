import FreezingRain from './freezing-rain.svg';
import IcePellets from './ice-pellete.svg';
import Snow from './snow.svg';
import Thunderstorm from './thunderstorm.svg';
import RainHeavy from './rain-heavy.svg';
import Rain from './rain-moderate.svg';
import Fog from './fog.svg';
import Cloudy from './cloudy.svg';
import PartlyCloudy from './partly-cloudy.svg';
import Clear from './clear-day.svg';

const getIcon=(weatherCode)=> {
    switch (weatherCode) {
        case 6000:
        case 6001:
        case 6200:
        case 6201:
            return {text:"Freezing Rain", icon:FreezingRain};
        case 7000:
        case 7101:
        case 7102:
            return {text:"Ice Pellets", icon:IcePellets};
        case 5000:
        case 5001:
        case 5100:
        case 5101:
            return {text:"Snow", icon:Snow};
        case 8000:
            return {text:"Snow", icon:Thunderstorm};
        case 4000:
        case 4001:
        case 4200:
            return {text:"Light Rain", icon:Rain};
        case 4201:
            return {text:"Heavy Rain", icon:RainHeavy};
        case 2000:
        case 2100:
            return {text:"Fog", icon:Fog};
        case 1001:
        case 1102:
            return {text:"Cloudy", icon:Cloudy};
        case 1101:
        case 1100:
            return {text:"Partly Cloudy", icon:PartlyCloudy};
        case 1000:
            return {text:"Clear Day", icon:Clear};;
        default:
            return null;
    }
}

export default getIcon;
