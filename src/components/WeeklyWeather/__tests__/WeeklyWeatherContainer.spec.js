import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { WeeklyWeatherContainer, mapStateToProps, mapDispatchToProps } from '../WeeklyWeatherContainer';

describe('WeeklyWeatherContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<WeeklyWeatherContainer />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    test('should return right value', () => {
      const initialState = {
        language: 'en',
        temperatureScale: 'celsius',
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
        weeklyWeather: [
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
        ],
      });
    });
  });
});
