import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Info from '../Info';

jest.mock('mapbox-gl', () => ({
  Icons: null,
}));

describe('Info', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<Info />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
});
