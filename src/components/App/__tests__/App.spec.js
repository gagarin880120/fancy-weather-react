import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create, act } from 'react-test-renderer';
import App from '../App';

jest.mock('mapbox-gl', () => ({
  mapboxgl: null,
}));

describe('App', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<App />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });

    test('should render with other elements depends on props', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<App currentWeather={{}} currentDate={{}} weeklyWeather={{}} isModalOpen={true} />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    test('should call onAppLoad when is mounted', () => {
      let root;
      const onAppLoad = jest.fn();

      act(() => {
        root = create(
          <App onAppLoad={onAppLoad} />
        )
      });

      expect(onAppLoad).toHaveBeenCalled();
    });
  });
});
