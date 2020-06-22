import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  language: 'en',
  latitude: '',
  longitude: '',
  address: '',
  currentWeather: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LANGUAGE':
      return { ...state, language: action.language };
    case 'LOCATION':
      return { ...state, latitude: action.latitude, longitude: action.longitude };
    case 'ADDRESS':
      return { ...state, address: action.address };
    case 'CURRENT_WEATHER':
      return { ...state, currentWeather: action.weatherObj };
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
