import convertCodeToCountryName from '../utils/country-codes';

function setLanguage(language) {
  return {
    type: 'LANGUAGE',
    language,
  };
}

function setAddress(address) {
  return {
    type: 'ADDRESS',
    address,
  };
}

function setLocation(latitude, longitude) {
  return {
    type: 'LOCATION',
    latitude,
    longitude,
  };
}

function setCurrentDate(currentDate) {
  return {
    type: 'CURRENT_DATE',
    currentDate,
  };
}

function setCurrentDateInterval(currentDateInterval) {
  return {
    type: 'CURRENT_DATE_INTERVAL',
    currentDateInterval,
  };
}

function setCurrentWeather(weatherObj) {
  return {
    type: 'CURRENT_WEATHER',
    weatherObj,
  };
}

function setWeeklyWeather(weeklyWeatherArr) {
  return {
    type: 'WEEKLY_WEATHER',
    weeklyWeatherArr,
  };
}

function getCurrentDate(lat, lng) {
  const API_KEY = 'ST1WDEJRNQDM';
  return (dispatch) => fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}`
  + `&format=json&by=position&lat=${lat}&lng=${lng}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setCurrentDate(data.formatted));
    })
    .catch((e) => console.log(e));
}

function getWeather(lat, lon) {
  const API_KEY = 'cf236ef1f2e94b658f9c745520d1fe1a';
  return (dispatch) => fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&days=8&lang=en&key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setCurrentWeather(data.data[0]));
      dispatch(setWeeklyWeather(data.data.slice(1)));
    })
    .catch((e) => console.log(e));
}

function getDefaultAddress() {
  const API_KEY = '60e8ad51f55486';
  return (dispatch) => fetch(`https://ipinfo.io?token=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setAddress(`${data.city}, ${convertCodeToCountryName(data.country, 'en')}`));
      const lat = data.loc.split(',')[0];
      const lon = data.loc.split(',')[1];
      dispatch(setLocation(lat, lon));
      dispatch(getWeather(lat, lon));
      dispatch(setCurrentDateInterval(setInterval(() => dispatch(getCurrentDate(lat, lon)), 1000)));
    })
    .catch((e) => console.log(e));
}

export {
  setAddress, setCurrentWeather, getDefaultAddress, setLanguage,
};
