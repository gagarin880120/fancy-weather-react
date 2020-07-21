import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Spinner from '../Spinner';

describe('Spinner', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<Spinner />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });
});
