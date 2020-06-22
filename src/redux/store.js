import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  place: '',
  currentWeather: {},
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PLACE':
      return { ...state, place: action.place };
    case 'CURRENT_WEATHER':
      return { ...state, currentWeather: action.weatherObj };
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
