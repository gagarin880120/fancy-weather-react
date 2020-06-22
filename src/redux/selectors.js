import convertKmphToMs from '../helpers/helpers';

const selectAddress = (state) => state.address;
const selectLanguage = (state) => state.language;

const selectCurrentWeather = (state) => {
  if (state.currentWeather) {
    return {
      ...state.currentWeather,
      wind_ms: Math.round(convertKmphToMs(state.currentWeather.wind_kph)),
      condition: {
        ...state.currentWeather.condition,
        icon: state.currentWeather.condition.icon.replace('64x64', '128x128'),
      },
    };
  }
  return null;
};

const selectLatitude = (state) => state.latitude;
const selectLongitude = (state) => state.longitude;

export {
  selectAddress, selectCurrentWeather, selectLanguage, selectLatitude, selectLongitude,
};
