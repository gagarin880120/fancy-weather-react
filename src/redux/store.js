import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  language: 'en',
  latitude: '',
  longitude: '',
  address: '',
  currentDate: '',
  currentDateInterval: null,
  currentWeather: null,
  weeklyWeather: null,
  backgroundImageURL: '',
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
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
