import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import WeeklyWeather from '../WeeklyWeather';

describe('WeeklyWeather', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(
      <WeeklyWeather
        weeklyWeather={[
          {
            datetime: '21.07.2020',
            temp: 15,
            weekday: 'Tuesday',
            icon: 'Sunny'
          },
          {
            datetime: '22.07.2020',
            temp: 18,
            weekday: 'Wednesday',
            icon: 'Clouds'
          },
        ]}
      />
      );

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
});
