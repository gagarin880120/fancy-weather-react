import { reducer } from '../store';
import { setLanguage, setAddress, setLocation, setCurrentDate, setCurrentDateInterval,
  setCurrentWeather, setWeeklyWeather, setBackgroundImageURL, setCountryFlagURL,
  setTemperatureScale, setQuery, setMapZoom, setIsModalOpen,
} from '../actions';

const state = {
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

describe('Reducer should return store with changes according to action type', () => {
  test('LANGUAGE', () => {
    expect(reducer(state, setLanguage('ru'))).toStrictEqual(
      {
        language: 'ru',
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
      }
    )
  });

  test('LOCATION', () => {
    expect(reducer(state, setLocation(25, 53))).toStrictEqual(
      {
        language: 'en',
        latitude: 25,
        longitude: 53,
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
      }
    )
  });

  test('ADDRESS', () => {
    expect(reducer(state, setAddress('Brest, Belarus'))).toStrictEqual(
      {
        language: 'en',
        latitude: 0,
        longitude: 0,
        address: 'Brest, Belarus',
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
      }
    )
  });

  test('CURRENT_DATE', () => {
    expect(reducer(state, setCurrentDate('22 Jun'))).toStrictEqual(
      {
        language: 'en',
        latitude: 0,
        longitude: 0,
        address: '',
        currentDate: '22 Jun',
        currentDateInterval: null,
        currentWeather: null,
        weeklyWeather: null,
        backgroundImageURL: '',
        countryFlagURL: '',
        temperatureScale: 'celsius',
        query: '',
        mapZoom: '8',
        isModalOpen: false,
      }
    )
  });

  test('CURRENT_DATE_INTERVAL', () => {
    expect(reducer(state, setCurrentDateInterval(15))).toStrictEqual(
      {
        language: 'en',
        latitude: 0,
        longitude: 0,
        address: '',
        currentDate: '',
        currentDateInterval: 15,
        currentWeather: null,
        weeklyWeather: null,
        backgroundImageURL: '',
        countryFlagURL: '',
        temperatureScale: 'celsius',
        query: '',
        mapZoom: '8',
        isModalOpen: false,
      }
    )
  });

  test('CURRENT_WEATHER', () => {
    expect(reducer(state, setCurrentWeather({temp: 22, rh: 15, wind_spd: 2}))).toStrictEqual(
      {
        language: 'en',
        latitude: 0,
        longitude: 0,
        address: '',
        currentDate: '',
        currentDateInterval: null,
        currentWeather: {temp: 22, rh: 15, wind_spd: 2},
        weeklyWeather: null,
        backgroundImageURL: '',
        countryFlagURL: '',
        temperatureScale: 'celsius',
        query: '',
        mapZoom: '8',
        isModalOpen: false,
      }
    )
  });

  test('WEEKLY_WEATHER', () => {
    expect(reducer(state, setWeeklyWeather([
      {temp: 22, rh: 15, wind_spd: 2},
      {temp: 20, rh: 10, wind_spd: 5},
    ]))).toStrictEqual(
      {
        language: 'en',
        latitude: 0,
        longitude: 0,
        address: '',
        currentDate: '',
        currentDateInterval: null,
        currentWeather: null,
        weeklyWeather: [
          {temp: 22, rh: 15, wind_spd: 2},
          {temp: 20, rh: 10, wind_spd: 5},
        ],
        backgroundImageURL: '',
        countryFlagURL: '',
        temperatureScale: 'celsius',
        query: '',
        mapZoom: '8',
        isModalOpen: false,
      }
    )
  });

  test('BACKGROUND_IMAGE_URL', () => {
    expect(reducer(state, setBackgroundImageURL('url'))).toStrictEqual(
      {
        language: 'en',
        latitude: 0,
        longitude: 0,
        address: '',
        currentDate: '',
        currentDateInterval: null,
        currentWeather: null,
        weeklyWeather: null,
        backgroundImageURL: 'url',
        countryFlagURL: '',
        temperatureScale: 'celsius',
        query: '',
        mapZoom: '8',
        isModalOpen: false,
      }
    )
  });

  test('COUNTRY_FLAG_URL', () => {
    expect(reducer(state, setCountryFlagURL('url'))).toStrictEqual(
      {
        language: 'en',
        latitude: 0,
        longitude: 0,
        address: '',
        currentDate: '',
        currentDateInterval: null,
        currentWeather: null,
        weeklyWeather: null,
        backgroundImageURL: '',
        countryFlagURL: 'https://raw.githubusercontent.com/gagarin880120/country-flags/master/png250px/url.png',
        temperatureScale: 'celsius',
        query: '',
        mapZoom: '8',
        isModalOpen: false,
      }
    )
  });

  test('TEMPERATURE_SCALE', () => {
    expect(reducer(state, setTemperatureScale('fahrenheit'))).toStrictEqual(
      {
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
        temperatureScale: 'fahrenheit',
        query: '',
        mapZoom: '8',
        isModalOpen: false,
      }
    )
  });

  test('QUERY', () => {
    expect(reducer(state, setQuery('London'))).toStrictEqual(
      {
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
        query: 'London',
        mapZoom: '8',
        isModalOpen: false,
      }
    )
  });

  test('MAP_ZOOM', () => {
    expect(reducer(state, setMapZoom('9'))).toStrictEqual(
      {
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
        mapZoom: '9',
        isModalOpen: false,
      }
    )
  });

  test('IS_MODAL_OPEN', () => {
    expect(reducer(state, setIsModalOpen(true))).toStrictEqual(
      {
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
        isModalOpen: true,
      }
    )
  });
});
