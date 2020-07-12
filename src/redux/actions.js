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

function setBackgroundImageURL(imageURL) {
  return {
    type: 'BACKGROUND_IMAGE_URL',
    imageURL,
  };
}

function setCountryFlagURL(countryCode) {
  return {
    type: 'COUNTRY_FLAG_URL',
    countryFlagURL: `https://raw.githubusercontent.com/gagarin880120/country-flags/master/png250px/${countryCode.toLowerCase()}.png`,
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

function getBackgroundImageURL(lat, lon) {
  const API_KEY = 'c8090405b9c8b36dbc1e8a34495de0cf';
  const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&'
  + `api_key=${API_KEY}&lat=${lat}&lon=${lon}&per_page=${20}&format=json&nojsoncallback=1&sort=interestingness-desc`;
  return (dispatch) => fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const {
        farm, server, secret, id,
      } = data.photos.photo[Math.floor(Math.random() * data.photos.photo.length)];
      dispatch(setBackgroundImageURL(
        `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_c.jpg`,
      ));
    })
    .catch((e) => console.log(e));
}

function getDefaultAddress() {
  const API_KEY = '60e8ad51f55486';
  return (dispatch) => fetch(`https://ipinfo.io?token=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setAddress(`${data.city}, ${convertCodeToCountryName(data.country, 'en')}`));
      dispatch(setCountryFlagURL(data.country));
      const lat = data.loc.split(',')[0];
      const lon = data.loc.split(',')[1];
      dispatch(setLocation(Number(lat), Number(lon)));
      dispatch(getWeather(lat, lon));
      dispatch(getCurrentDate(lat, lon));
      dispatch(setCurrentDateInterval(
        setInterval(() => dispatch(getCurrentDate(lat, lon)), 20000),
      ));
      dispatch(getBackgroundImageURL(lat, lon));
    })
    .catch((e) => console.log(e));
}

function getAddressBySearch(query) {
  const API_KEY = 'b6f94f0170be41b3b46f023bd725de3d';
  return (dispatch) => fetch('https://api.opencagedata.com/geocode/v1/json?q='
  + `${query}&key=${API_KEY}&language=en `)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.results);
      const { lat } = data.results[0].geometry;
      const { lng } = data.results[0].geometry;
      dispatch(setLocation(lat, lng));
      const { city } = data.results[0].components;
      const country = convertCodeToCountryName(data.results[0].components['ISO_3166-1_alpha-2'], 'en');
      dispatch(setCountryFlagURL(data.results[0].components['ISO_3166-1_alpha-2']));
      dispatch(setAddress(city ? `${city}, ${country}` : data.results[0].formatted));
      dispatch(getWeather(lat, lng));
      dispatch(getCurrentDate(lat, lng));
      dispatch(setCurrentDateInterval(
        setInterval(() => dispatch(getCurrentDate(lat, lng)), 20000),
      ));
      dispatch(getBackgroundImageURL(lat, lng));
    })
    .catch((e) => console.log(e));
}

export {
  setAddress, setCurrentWeather, getDefaultAddress, setLanguage, getAddressBySearch,
};
