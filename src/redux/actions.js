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

function setTemperatureScale(temperatureScale) {
  return {
    type: 'TEMPERATURE_SCALE',
    temperatureScale,
  };
}

function setQuery(query) {
  return {
    type: 'QUERY',
    query,
  };
}

function setMapZoom(mapZoom) {
  return {
    type: 'MAP_ZOOM',
    mapZoom,
  };
}
function setIsModalOpen(isModalOpen) {
  return {
    type: 'IS_MODAL_OPEN',
    isModalOpen,
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

function getCurrentWeather(lat, lon, lang) {
  const API_KEY = 'cf236ef1f2e94b658f9c745520d1fe1a';
  return (dispatch) => fetch(`https://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${lon}&lang=${lang}&key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setCurrentWeather(data.data[0]));
    })
    .catch((e) => console.log(e));
}

function getWeeklyWeather(lat, lon, lang) {
  const API_KEY = 'cf236ef1f2e94b658f9c745520d1fe1a';
  return (dispatch) => fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&days=8&lang=${lang}&key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setWeeklyWeather(data.data.slice(1)));
    })
    .catch((e) => console.log(e));
}
function getBackgroundImageURL(imgURL) {
  return (dispatch) => fetch(imgURL)
    .then((res) => (res.status === 410
      ? dispatch(setBackgroundImageURL('https://i.ibb.co/yYjFnrV/earth.png'))
      : dispatch(setBackgroundImageURL(imgURL))))
    .catch((e) => {
      console.log(e);
      dispatch(setBackgroundImageURL('https://i.ibb.co/yYjFnrV/earth.png'));
    });
}

function getFlickrImageURL(query) {
  const API_KEY = 'c8090405b9c8b36dbc1e8a34495de0cf';
  const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&'
  + `api_key=${API_KEY}&tags=${query}&per_page=${20}&format=json&nojsoncallback=1&sort=relevance`;
  return (dispatch) => fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const {
        farm, server, secret, id,
      } = data.photos.photo[Math.floor(Math.random() * data.photos.photo.length)];
      dispatch(getBackgroundImageURL(`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_c.jpg`));
    })
    .catch((e) => {
      console.log(e);
      dispatch(setBackgroundImageURL('https://i.ibb.co/yYjFnrV/earth.png'));
    });
}

const intervalCb = (lat, lng) => (dispatch) => dispatch(getCurrentDate(lat, lng));

function getDefaultAddress() {
  const API_KEY = '60e8ad51f55486';
  return (dispatch) => fetch(`https://ipinfo.io?token=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      const address = `${data.city}, ${convertCodeToCountryName(data.country, 'en')}`;
      dispatch(setAddress(address));
      dispatch(setQuery(address));
      dispatch(setCountryFlagURL(data.country));
      const lat = data.loc.split(',')[0];
      const lon = data.loc.split(',')[1];
      dispatch(setLocation(Number(lat), Number(lon)));
      dispatch(getCurrentWeather(lat, lon, 'en'));
      dispatch(getWeeklyWeather(lat, lon, 'en'));
      dispatch(getCurrentDate(lat, lon));
      dispatch(setCurrentDateInterval(
        setInterval(intervalCb, 20000, lat, lon),
      ));
      dispatch(getFlickrImageURL(address));
    })
    .catch((e) => console.log(e));
}

function getAddressBySearch(query, lang, translateOnly, interval) {
  const API_KEY = 'b6f94f0170be41b3b46f023bd725de3d';
  return (dispatch) => fetch('https://api.opencagedata.com/geocode/v1/json?q='
  + `${query}&key=${API_KEY}&language=${lang} `)
    .then((res) => res.json())
    .then((data) => {
      const { city } = data.results[0].components;
      const country = convertCodeToCountryName(data.results[0].components['ISO_3166-1_alpha-2'], lang);
      const { lat } = data.results[0].geometry;
      const { lng } = data.results[0].geometry;
      const address = city ? `${city}, ${country}` : data.results[0].formatted;
      if (translateOnly) {
        dispatch(setAddress(address));
        dispatch(getCurrentWeather(lat, lng, lang));
        dispatch(getWeeklyWeather(lat, lng, lang));
      } else {
        clearInterval(interval);
        dispatch(setAddress(address));
        dispatch(setCountryFlagURL(data.results[0].components['ISO_3166-1_alpha-2']));
        dispatch(setLocation(lat, lng));
        dispatch(getCurrentWeather(lat, lng, lang));
        dispatch(getWeeklyWeather(lat, lng, lang));
        dispatch(getCurrentDate(lat, lng));
        dispatch(setCurrentDateInterval(
          setInterval(intervalCb, 20000, lat, lng),
        ));
        dispatch(getFlickrImageURL(address));
      }
    })
    .catch((e) => {
      console.log(e);
      dispatch(setIsModalOpen(true));
    });
}

export {
  setLanguage, setAddress, setLocation, setCurrentDate, setCurrentDateInterval,
  setCurrentWeather, setWeeklyWeather, setBackgroundImageURL, setCountryFlagURL,
  setTemperatureScale, setQuery, setMapZoom, setIsModalOpen, getCurrentDate,
  getCurrentWeather, getWeeklyWeather, getBackgroundImageURL, getFlickrImageURL, getDefaultAddress,
  getAddressBySearch, intervalCb,
};
