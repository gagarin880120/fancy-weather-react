import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NavBar from '../NavBar';

describe('NavBar', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<NavBar />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
});
