import {
  selectAddress, selectLanguage, selectLatitude, selectLongitude, selectCurrentDate,
  selectCurrentWeather, selectWeeklyWeather, selectBackgroundImageURL, selectCurrentDateInterval,
  selectCountryFlagURL, selectQuery, selectMapZoom, selectIsModalOpen, selectTemperatureScale,
} from '../selectors';

const state = {
  language: 'en',
  latitude: 23,
  longitude: 52,
  address: 'Brest, Belarus',
  currentDate: '2020-07-20 11:42:14',
  currentDateInterval: 1,
  currentWeather: {
    rh: 15,
    temp: 12,
    wind_spd: 3,
    weather: {
      code: '801',
      icon: 'c02d'
    }
  },
  weeklyWeather: [
    {
      datetime: '2020-07-21',
      temp: 19.9,
      weather: {
        code: 804,
        icon: 'c04d',
      }
    },
    {
      datetime: '2020-07-22',
      temp: 15.6,
      weather: {
        code: 804,
        icon: 'c04d',
      }
    },
    {
      datetime: '2020-07-23',
      temp: 15.3,
      weather: {
        code: 804,
        icon: 'c04d',
      }
    }
  ],
  backgroundImageURL: 'url',
  countryFlagURL: 'url',
  temperatureScale: 'celsius',
  query: 'Brest, Belarus',
  mapZoom: '8',
  isModalOpen: false,
};

describe('Selector', () => {
  describe('selectAddress',() => {
    test('should return address', () => {
      expect(selectAddress(state)).toStrictEqual(state.address);
    });
  });

  describe('selectLanguage',() => {
    test('should return language', () => {
      expect(selectLanguage(state)).toStrictEqual(state.language);
    });
  });

  describe('selectLatitude',() => {
    test('should return latitude', () => {
      expect(selectLatitude(state)).toStrictEqual(state.latitude);
    });
  });

  describe('selectLongitude',() => {
    test('should return longitude', () => {
      expect(selectLongitude(state)).toStrictEqual(state.longitude);
    });
  });

  describe('selectCurrentDate',() => {
    describe('if currentDate !== null', () => {
      describe('if language === en', () => {
        test('should return currentDate, converted to LocaleDateString', () => {
          expect(selectCurrentDate(state)).toStrictEqual('Mon, 20 July, 11:42');
        });
      });

      describe('if language === ru', () => {
        test('should return currentDate, converted to LocaleDateString', () => {
          const state = {
            language: 'ru',
            currentDate: '2020-07-20 11:42:14',
          }
          expect(selectCurrentDate(state)).toStrictEqual('пн, 20 июля, 11:42');
        });
      })
    });

    describe('if currentDate === null', () => {
      const state = {
        currentDate: null,
      }
      test('should return null', () => {
        expect(selectCurrentDate(state)).toStrictEqual(null);
      });
    });
  });

  describe('selectCurrentDateInterval',() => {
    test('should return currentDateInterval', () => {
      expect(selectCurrentDateInterval(state)).toStrictEqual(state.currentDateInterval);
    });
  });

  describe('selectCurrentWeather',() => {
    describe('if currentWeather !== null', () => {
      describe('if language === en', () => {
        test('should return object with current weather', () => {
          expect(selectCurrentWeather(state)).toStrictEqual({
            rh: 'Humidity: 15%',
            wind_spd: 'Wind: 3m/s',
            temp: 12,
            icon: 'DayCloudyGusts',
            weather: {
              code: '801',
              icon: 'c02d',
            },
          });
        });
      });

      describe('if language === ru and temperatureScale === fahrenheit', () => {
        test('should return object with current weather', () => {
          const stateWithOtherLanguage = {
            ...state,
            language: 'ru',
            temperatureScale: 'fahrenheit'
          }
          expect(selectCurrentWeather(stateWithOtherLanguage)).toStrictEqual({
            rh: 'Влажность: 15%',
            wind_spd: 'Ветер: 3м/с',
            temp: 54,
            icon: 'DayCloudyGusts',
            weather: {
              code: '801',
              icon: 'c02d',
            },
          });
        });
      })
    });

    describe('if currentWeather === null', () => {
      const stateWithNull = {
        currentWeather: null,
      }
      test('should return null', () => {
        expect(selectCurrentWeather(stateWithNull)).toStrictEqual(null);
      });
    });
  });

  describe('selectWeeklyWeather', () => {
    describe('if weeklyWeather !== null', () => {
      describe('if language === en', () => {
        test('should return array of objects with weather', () => {
          expect(selectWeeklyWeather(state)).toStrictEqual([
            {
              datetime: '2020-07-21',
              weekday: 'Tuesday',
              temp: 20,
              icon: 'DaySunnyOvercast',
              weather: {
                code: 804,
                icon: 'c04d',
              }
            },
            {
              datetime: '2020-07-22',
              weekday: 'Wednesday',
              temp: 16,
              icon: 'DaySunnyOvercast',
              weather: {
                code: 804,
                icon: 'c04d',
              }
            },
            {
              datetime: '2020-07-23',
              weekday: 'Thursday',
              temp: 15,
              icon: 'DaySunnyOvercast',
              weather: {
                code: 804,
                icon: 'c04d',
              }
            }
          ]);
        });
      });

      describe('if language === ru and temperatureScale === fahrenheit', () => {
        test('should return array of objects with weather', () => {
          const stateWithOtherLanguage = {
            ...state,
            language: 'ru',
            temperatureScale: 'fahrenheit'
          }
          expect(selectWeeklyWeather(stateWithOtherLanguage)).toStrictEqual([
            {
              datetime: '2020-07-21',
              weekday: 'вторник',
              temp: 68,
              icon: 'DaySunnyOvercast',
              weather: {
                code: 804,
                icon: 'c04d',
              }
            },
            {
              datetime: '2020-07-22',
              weekday: 'среда',
              temp: 60,
              icon: 'DaySunnyOvercast',
              weather: {
                code: 804,
                icon: 'c04d',
              }
            },
            {
              datetime: '2020-07-23',
              weekday: 'четверг',
              temp: 60,
              icon: 'DaySunnyOvercast',
              weather: {
                code: 804,
                icon: 'c04d',
              }
            }
          ]);
        });
      })
    });

    describe('if weeklyWeather === null', () => {
      const stateWithNull = {
        weeklyWeather: null,
      }
      test('should return null', () => {
        expect(selectWeeklyWeather(stateWithNull)).toStrictEqual(null);
      });
    });
  });

  describe('selectBackgroundImageURL', () => {
    test('should return backgroundImageURL', () => {
      expect(selectBackgroundImageURL(state)).toStrictEqual(state.backgroundImageURL);
    });
  });

  describe('selectCountryFlagURL', () => {
    test('should return countryFlagURL', () => {
      expect(selectCountryFlagURL(state)).toStrictEqual(state.countryFlagURL);
    });
  });

  describe('selectTemperatureScale', () => {
    test('should return temperatureScale', () => {
      expect(selectTemperatureScale(state)).toStrictEqual(state.temperatureScale);
    });
  });

  describe('selectQuery', () => {
    test('should return query', () => {
      expect(selectQuery(state)).toStrictEqual(state.query);
    });
  });

  describe('selectMapZoom', () => {
    test('should return mapZoom', () => {
      expect(selectMapZoom(state)).toStrictEqual(state.mapZoom);
    });
  });

  describe('selectIsModalOpen', () => {
    test('should return isModalOpen', () => {
      expect(selectIsModalOpen(state)).toStrictEqual(state.isModalOpen);
    });
  });
});
