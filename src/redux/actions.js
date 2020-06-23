import convertCodeToCountryName from '../utils/country-codes';

function setAddress(address) {
  return {
    type: 'ADDRESS',
    address,
  };
}

function setLanguage(language) {
  return {
    type: 'LANGUAGE',
    language,
  };
}

function setCurrentWeather(weatherObj) {
  return {
    type: 'CURRENT_WEATHER',
    weatherObj,
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
    currentDate
  };
}

function setCurrentDateInterval(currentDateInterval) {
  return {
    type: 'CURRENT_DATE_INTERVAL',
    currentDateInterval
  };
}

function getCurrentDate(lat, lng) {
  const API_KEY = 'ST1WDEJRNQDM';
  return (dispatch) => fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}`
  + `&format=json&by=position&lat=${lat}&lng=${lng}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setCurrentDate(data.formatted))
    })
    .catch((e) => console.log(e));
}

function getCurrentWeather(loc) {
  const API_KEY = '4f572074b9284bfd9c881454202106';
  return (dispatch) => fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${loc}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setCurrentWeather(data.current));
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
      dispatch(getCurrentWeather(data.loc));
      dispatch(setCurrentDateInterval(setInterval(() => dispatch(getCurrentDate(lat, lon)), 1000)))
    })
    .catch((e) => console.log(e));
}

export {
  setAddress, setCurrentWeather, getDefaultAddress, setLanguage,
};
