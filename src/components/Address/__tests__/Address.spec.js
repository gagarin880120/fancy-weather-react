import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Address from '../Address';

describe('Address', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<Address />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
});
