import convertCodeToName from '../utils/openweatherCodes';
import convertCelsiusToFahrenheit from '../helpers/helpers';

const selectLanguage = (state) => state.language;
const selectAddress = (state) => state.address;

const selectCurrentDate = (state) => {
  if (state.currentDate) {
    const options = {
      weekday: 'short', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric',
    };
    return new Date(state.currentDate).toLocaleDateString(state.language === 'en' ? 'en-GB' : 'ru', options);
  }
  return null;
};

const selectCurrentWeather = (state) => {
  if (state.currentWeather) {
    return {
      ...state.currentWeather,
      rh: `${
        state.language === 'en' ? 'Humidity: ' : 'Влажность: '
      }${
        Math.round(state.currentWeather.rh)
      }%`,
      wind_spd: `${
        state.language === 'en' ? 'Wind: ' : 'Ветер: '
      }${
        Math.round(state.currentWeather.wind_spd)
      }${state.language === 'en' ? 'm/s' : 'м/с'}`,
      temp: state.temperatureScale === 'celsius' ? Math.round(state.currentWeather.temp) : convertCelsiusToFahrenheit(state.currentWeather.temp),
      icon: convertCodeToName(
        state.currentWeather.weather.icon.slice(-1) + state.currentWeather.weather.code,
      ),
    };
  }
  return null;
};

const selectWeeklyWeather = (state) => {
  if (state.weeklyWeather) {
    return state.weeklyWeather.map((v) => ({
      ...v,
      temp: state.temperatureScale === 'celsius' ? Math.round(v.temp) : convertCelsiusToFahrenheit(v.temp),
      weekday: new Date(v.datetime).toLocaleDateString(state.language === 'en' ? 'en-GB' : 'ru', { weekday: 'long' }),
      icon: convertCodeToName(
        v.weather.icon.slice(-1) + v.weather.code,
      ),
    }));
  }
  return null;
};

const selectLatitude = (state) => state.latitude;
const selectLongitude = (state) => state.longitude;
const selectBackgroundImageURL = (state) => state.backgroundImageURL;
const selectCurrentDateInterval = (state) => state.currentDateInterval;
const selectCountryFlagURL = (state) => state.countryFlagURL;
const selectQuery = (state) => state.query;
const selectMapZoom = (state) => state.mapZoom;
const selectIsModalOpen = (state) => state.isModalOpen;
const selectTemperatureScale = (state) => state.temperatureScale;

export {
  selectAddress, selectCurrentWeather, selectLanguage, selectLatitude, selectLongitude,
  selectCurrentDate, selectWeeklyWeather, selectBackgroundImageURL, selectCurrentDateInterval,
  selectCountryFlagURL, selectQuery, selectMapZoom, selectIsModalOpen, selectTemperatureScale,
};
