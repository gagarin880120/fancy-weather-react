import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AppContainer, mapStateToProps, mapDispatchToProps } from '../AppContainer';
import { getDefaultAddress } from '../../../redux/actions';

jest.mock('mapbox-gl', () => ({
  mapboxgl: null,
}));

jest.mock('../../../redux/actions', () => ({
  getDefaultAddress: jest.fn()
}))

describe('AppContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<AppContainer />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
  describe('mapStateToProps', () => {
    test('should return right value', () => {
      const initialState = {
        language: 'en',
        temperatureScale: 'celsius',
        backgroundImageURL: 'url',
        isModalOpen: false,
        currentWeather: {
          rh: 15,
          temp: 12,
          wind_spd: 3,
          weather: {
            code: '801',
            icon: 'c02d'
          }
        },
        currentDate: '2020-07-20 15:09:14',
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
      }

      expect(mapStateToProps(initialState)).toEqual({
        backgroundImageURL: 'url',
        isModalOpen: false,
        currentWeather: {
          rh: 'Humidity: 15%',
          wind_spd: 'Wind: 3m/s',
          temp: 12,
          icon: 'DayCloudyGusts',
          weather: {
            code: '801',
            icon: 'c02d',
          },
        },
        currentDate: 'Mon, 20 July, 15:09',
        weeklyWeather: [{
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
        }],
      })
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onAppLoad should dispatch getDefaultAddress action', () => {
      const dispatch = jest.fn();
      const {onAppLoad} = mapDispatchToProps(dispatch);

      onAppLoad();

      expect(getDefaultAddress).toHaveBeenCalled();
    });
  });
});
