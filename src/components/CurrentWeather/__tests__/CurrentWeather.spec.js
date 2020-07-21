import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CurrentWeather from '../CurrentWeather';

jest.mock('@intern0t/react-weather-icons', () => ({sunny: jest.fn()}));

describe('CurrentWeather', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(
        <CurrentWeather
          currentWeather={{
            icon: 'sunny',
            weather: {
              description: 'Sunny weather'
            }
          }}
        />
      );

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
});
