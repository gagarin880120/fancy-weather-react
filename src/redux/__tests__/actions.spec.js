import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  getCurrentDate, getCurrentWeather, getWeeklyWeather, getBackgroundImageURL,
  getFlickrImageURL, getDefaultAddress, getAddressBySearch, intervalCb,
 } from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action', () => {
  describe('intervalCb', () => {
    test('should dispatch getCurrentDate', () => {
      fetch.mockResponse(JSON.stringify({ formatted: '28.02.2020' }));
      const expectedActions = [
        { type: 'CURRENT_DATE', currentDate: '28.02.2020' },
      ];

      const store = mockStore({});

      return store.dispatch(intervalCb())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    })
  })
})

describe('Async action', () => {
  beforeEach(() => {
    fetch.resetMocks();
    jest.useFakeTimers();
  });

  describe('getCurrentDate', () => {
    test('should dispatch setCurrentDate on successful fetch request', () => {
      fetch.mockResponse(JSON.stringify({ formatted: '28.02.2020' }));

      const expectedActions = [
        { type: 'CURRENT_DATE', currentDate: '28.02.2020' },
      ];

      const store = mockStore({});

      return store.dispatch(getCurrentDate())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    });

    test('should catch error if is rejected', () => {
      fetch.mockReject(new Error('fake error message'));

      const store = mockStore({});

      return store.dispatch(getCurrentDate())
        .then(() => {
          expect(store.getActions()).toEqual([]);
        })
    });
  });

  describe('getCurrentWeather', () => {
    test('should dispatch setCurrentWeather on successful fetch request', () => {
      fetch.mockResponse(JSON.stringify({ data: [{temp: 25, rh: 80, wind_spd: 25}] }));

      const expectedActions = [
        { type: 'CURRENT_WEATHER', weatherObj: {temp: 25, rh: 80, wind_spd: 25} },
      ];

      const store = mockStore({});

      return store.dispatch(getCurrentWeather())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    });

    test('should catch error if is rejected', () => {
      fetch.mockReject(new Error('fake error message'));

      const store = mockStore({});

      return store.dispatch(getCurrentWeather())
        .then(() => {
          expect(store.getActions()).toEqual([]);
        })
    });
  });

  describe('getWeeklyWeather', () => {
    test('should dispatch setWeeklyWeather on successful fetch request', () => {
      fetch.mockResponse(JSON.stringify({ data: [
        {temp: 25, rh: 80, wind_spd: 25},
        {temp: 22, rh: 45, wind_spd: 5},
        {temp: 21, rh: 30, wind_spd: 3},
      ] }));

      const expectedActions = [
        { type: 'WEEKLY_WEATHER', weeklyWeatherArr: [
          {temp: 22, rh: 45, wind_spd: 5},
          {temp: 21, rh: 30, wind_spd: 3},
        ] },
      ];

      const store = mockStore({});

      return store.dispatch(getWeeklyWeather())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    });

    test('should catch error if is rejected', () => {
      fetch.mockReject(new Error('fake error message'));

      const store = mockStore({});

      return store.dispatch(getWeeklyWeather())
        .then(() => {
          expect(store.getActions()).toEqual([]);
        })
    });
  });

  describe('getBackgroundImageURL', () => {
    test('should dispatch setBackgroundImageURL with default image if res.status === 410', () => {
      fetch.mockResponseOnce(() => new Promise(resolve => resolve({ status: 410 })))


      const expectedActions = [
        {type: 'BACKGROUND_IMAGE_URL',
        imageURL: 'https://i.ibb.co/yYjFnrV/earth.png'}
      ];

      const store = mockStore({});

      return store.dispatch(getBackgroundImageURL('https://farm0.staticflickr.com/0/54321_12345_c.jpg'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    });

    test('should catch error if is rejected', () => {
      fetch.mockReject(new Error('fake error message'));

      const store = mockStore({});

      const expectedActions = [
        {type: 'BACKGROUND_IMAGE_URL', imageURL: 'https://i.ibb.co/yYjFnrV/earth.png'}
      ]

      return store.dispatch(getBackgroundImageURL())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    });
  });

  describe('getFlickrImageURL', () => {
    test('should dispatch setBackgroundImageURL on successful fetch request', () => {
      fetch.mockResponse(JSON.stringify({ photos: {photo: [{
        farm: 0,
        server: 0,
        secret: 12345,
        id: 54321,
      }] }}));

      const expectedActions = [
        {type: 'BACKGROUND_IMAGE_URL',
        imageURL: 'https://farm0.staticflickr.com/0/54321_12345_c.jpg'}
      ];

      const store = mockStore({});

      return store.dispatch(getFlickrImageURL())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    });

    test('should catch error if is rejected', () => {
      fetch.mockReject(new Error('fake error message'));

      const store = mockStore({});

      const expectedActions = [
        {type: 'BACKGROUND_IMAGE_URL', imageURL: 'https://i.ibb.co/yYjFnrV/earth.png'}
      ]

      return store.dispatch(getFlickrImageURL())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    });
  });

  describe('getDefaultAddress', () => {

    test('should dispatch setAddress, setQuery, setCountryFlagURL, setLocation, getCurrentWeather, ' +
    'setCurrentDateInterval on successful fetch request', () => {
      fetch.mockResponse(JSON.stringify({city: 'Brest', country: 'BY', loc: '23,52'}));

      const expectedActions = [
        {type: 'ADDRESS', address: 'Brest, Belarus'},
        {type: 'QUERY', query: 'Brest, Belarus'},
        {type: 'COUNTRY_FLAG_URL',
        countryFlagURL: 'https://raw.githubusercontent.com/gagarin880120/country-flags/master/png250px/by.png'},
        {type: 'LOCATION', latitude: 23, longitude: 52},
        {type: 'CURRENT_DATE_INTERVAL', currentDateInterval: 1},
      ];

      const store = mockStore({});

      return store.dispatch(getDefaultAddress())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(setInterval).toHaveBeenCalled();
        })
    });

    test('should catch error if is rejected', () => {
      fetch.mockReject(new Error('fake error message'));

      const store = mockStore({});

      return store.dispatch(getDefaultAddress())
        .then(() => {
          expect(store.getActions()).toEqual([]);
        })
    });
  });

  describe('getAddressBySearch', () => {
    test('should dispatch setAddress, setCountryFlagURL, setLocation, setCurrentDateInterval, on successful fetch request', () => {
      fetch.mockResponse(JSON.stringify({results: [
        {
          components: {
          city: 'Minsk',
          'ISO_3166-1_alpha-2': 'BY',
        },
          geometry: {
            lat: 24,
            lng: 57,
          }
        }
      ]}));

      const expectedActions = [
        {type: 'ADDRESS', address: 'Minsk, Belarus'},
        {type: 'COUNTRY_FLAG_URL',
        countryFlagURL: 'https://raw.githubusercontent.com/gagarin880120/country-flags/master/png250px/by.png'},
        {type: 'LOCATION', latitude: 24, longitude: 57},
        {type: 'CURRENT_DATE_INTERVAL', currentDateInterval: 2},
      ];

      const store = mockStore({});

      return store.dispatch(getAddressBySearch('', 'en'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(setInterval).toHaveBeenCalled();
        expect(clearInterval).toHaveBeenCalled();
        })
    });

    test('should dispatch setAddress, setCountryFlagURL, setLocation, setCurrentDateInterval, on successful fetch request (case without city)', () => {
      fetch.mockResponse(JSON.stringify({results: [
        {
          formatted: 'Minsk, Belarus',
          components: {
          'ISO_3166-1_alpha-2': 'BY',
        },
          geometry: {
            lat: 24,
            lng: 57,
          }
        }
      ]}));

      const expectedActions = [
        {type: 'ADDRESS', address: 'Minsk, Belarus'},
        {type: 'COUNTRY_FLAG_URL',
        countryFlagURL: 'https://raw.githubusercontent.com/gagarin880120/country-flags/master/png250px/by.png'},
        {type: 'LOCATION', latitude: 24, longitude: 57},
        {type: 'CURRENT_DATE_INTERVAL', currentDateInterval: 3},
      ];

      const store = mockStore({});

      return store.dispatch(getAddressBySearch('', 'en'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(setInterval).toHaveBeenCalled();
        expect(clearInterval).toHaveBeenCalled();
        })
    });

    test('should dispatch setAddress (if translateOnly), on successful fetch request', () => {
      fetch.mockResponse(JSON.stringify({results: [
        {
          components: {
          city: 'Minsk',
          'ISO_3166-1_alpha-2': 'BY',
        },
          geometry: {
            lat: 24,
            lng: 57,
          }
        }
      ]}));

      const expectedActions = [
        {type: 'ADDRESS', address: 'Minsk, Belarus'},
      ];

      const store = mockStore({});

      return store.dispatch(getAddressBySearch('', 'en', true))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        })
    });

    test('should dispatch setAddress (if translateOnly), on successful fetch request (case without city)', () => {
      fetch.mockResponse(JSON.stringify({results: [
        { formatted: 'Minsk, Belarus',
          components: {
          'ISO_3166-1_alpha-2': 'BY',
        },
          geometry: {
            lat: 24,
            lng: 57,
          }
        }
      ]}));

      const expectedActions = [
        {type: 'ADDRESS', address: 'Minsk, Belarus'},
      ];

      const store = mockStore({});

      return store.dispatch(getAddressBySearch('', 'en', true))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        })
    });

    test('should catch error if is rejected', () => {
      fetch.mockReject(new Error('fake error message'));

      const store = mockStore({});

      const expectedActions = [
        {type: 'IS_MODAL_OPEN', isModalOpen: true}
      ]

      return store.dispatch(getAddressBySearch())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    });
  });
});
