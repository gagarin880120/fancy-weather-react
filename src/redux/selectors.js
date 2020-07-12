import convertCodeToName from '../utils/openweatherCodes';

const selectLanguage = (state) => state.language;
const selectAddress = (state) => state.address;

const selectCurrentDate = (state) => {
  if (state.currentDate) {
    const options = {
      weekday: 'short', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric',
    };
    return new Date(state.currentDate).toLocaleDateString('en-GB', options);
  }
  return null;
};

const selectWeeklyWeather = (state) => {
  if (state.weeklyWeather) {
    return state.weeklyWeather.map((v) => ({
      ...v,
      wind_spd: Math.round(v.wind_spd),
      temp: Math.round(v.temp),
      weekday: new Date(v.datetime).toLocaleDateString('en-GB', { weekday: 'long' }),
      icon: convertCodeToName(
        v.weather.icon.slice(-1) + v.weather.code,
      ),
    }));
  }
  return null;
};

const selectCurrentWeather = (state) => {
  if (state.currentWeather) {
    return {
      ...state.currentWeather,
      wind_spd: Math.round(state.currentWeather.wind_spd),
      temp: Math.round(state.currentWeather.temp),
      icon: convertCodeToName(
        state.currentWeather.weather.icon.slice(-1) + state.currentWeather.weather.code,
      ),
    };
  }
  return null;
};

const selectLatitude = (state) => state.latitude;
const selectLongitude = (state) => state.longitude;
const selectBackgroundImageURL = (state) => state.backgroundImageURL;
const selectCurrentDateInterval = (state) => state.currentDateInterval;
const selectCountryFlagURL = (state) => state.countryFlagURL;

export {
  selectAddress, selectCurrentWeather, selectLanguage, selectLatitude, selectLongitude,
  selectCurrentDate, selectWeeklyWeather, selectBackgroundImageURL, selectCurrentDateInterval,
  selectCountryFlagURL,
};
