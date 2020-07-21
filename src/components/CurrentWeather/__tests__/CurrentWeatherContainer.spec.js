import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { CurrentWeatherContainer, mapStateToProps } from '../CurrentWeatherContainer';

describe('CurrentWeatherContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<CurrentWeatherContainer />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    test('should return right value', () => {
      const initialState = {
        language: 'en',
        temperatureScale: 'celsius',
        currentWeather: {
          rh: 15,
          temp: 12,
          wind_spd: 3,
          weather: {
            code: '801',
            icon: 'c02d'
          }
        },
      }

      expect(mapStateToProps(initialState)).toEqual({
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
      });
    });
  });
});
