import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  language: 'en',
  latitude: 0,
  longitude: 0,
  address: '',
  currentDate: '',
  currentDateInterval: null,
  currentWeather: null,
  weeklyWeather: null,
  backgroundImageURL: '',
  countryFlagURL: '',
  temperatureScale: 'celsius',
  query: '',
  mapZoom: '8',
  isModalOpen: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LANGUAGE':
      return { ...state, language: action.language };
    case 'LOCATION':
      return { ...state, latitude: action.latitude, longitude: action.longitude };
    case 'ADDRESS':
      return { ...state, address: action.address };
    case 'CURRENT_DATE':
      return { ...state, currentDate: action.currentDate };
    case 'CURRENT_DATE_INTERVAL':
      return { ...state, currentDateInterval: action.currentDateInterval };
    case 'CURRENT_WEATHER':
      return { ...state, currentWeather: action.weatherObj };
    case 'WEEKLY_WEATHER':
      return { ...state, weeklyWeather: action.weeklyWeatherArr };
    case 'BACKGROUND_IMAGE_URL':
      return { ...state, backgroundImageURL: action.imageURL };
    case 'COUNTRY_FLAG_URL':
      return { ...state, countryFlagURL: action.countryFlagURL };
    case 'TEMPERATURE_SCALE':
      return { ...state, temperatureScale: action.temperatureScale };
    case 'QUERY':
      return { ...state, query: action.query };
    case 'MAP_ZOOM':
      return { ...state, mapZoom: action.mapZoom };
    case 'IS_MODAL_OPEN':
      return { ...state, isModalOpen: action.isModalOpen };
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
