import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import TemperatureScaleButton from '../TemperatureScaleButton';

describe('TemperatureScaleButton', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(
      <TemperatureScaleButton
        scale="fahrenheit"
        temperatureScale="fahrenheit"
      />
      );

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });

    describe('Events', () => {
      const onScaleButtonClick = jest.fn();

      const testRenderer = TestRenderer.create(
        <TemperatureScaleButton
          scale="celsius"
          onScaleButtonClick={onScaleButtonClick}
        />
      );

      const button = testRenderer.root.findByProps({ type: 'button' });

      describe('onClick', () => {
        test('should call onScaleButtonClick function', () => {

          act(() => {
            button.props.onClick();
          });

          expect(onScaleButtonClick).toHaveBeenCalled();
        });
      });
    });
  });
});
