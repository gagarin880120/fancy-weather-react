import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CurrentDate from '../CurrentDate';

describe('CurrentDate', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<CurrentDate />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
});
