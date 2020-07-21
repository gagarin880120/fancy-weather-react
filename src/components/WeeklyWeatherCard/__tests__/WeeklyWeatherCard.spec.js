import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import WeeklyWeatherCard from '../WeeklyWeatherCard';

jest.mock('@intern0t/react-weather-icons', () => ({sunny: jest.fn()}));

describe('WeeklyWeatherCard', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(
        <WeeklyWeatherCard
          weekday="Tuesday"
          temp={20}
          icon="sunny"
        />
      );

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
});
