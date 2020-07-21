import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import LanguageSelect from '../LanguageSelect';

describe('LanguageSelect', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<LanguageSelect />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });

    describe('Event', () => {
      const onLanguageChange = jest.fn();

      const testRenderer = TestRenderer.create(
        <LanguageSelect
          onLanguageChange={onLanguageChange}
        />
      );
      test('onChange should call onLanguageChange function', () => {
        const select = testRenderer.root.findByType('select');

        act(() => {
          select.props.onChange({target: { value: '28' }});
        })

        expect(onLanguageChange).toHaveBeenCalled();
      });
    });
  });
});
