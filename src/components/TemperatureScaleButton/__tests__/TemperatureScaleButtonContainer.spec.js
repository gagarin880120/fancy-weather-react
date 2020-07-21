import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { TemperatureScaleButtonContainer, mapStateToProps, mapDispatchToProps } from '../TemperatureScaleButtonContainer';
import { setTemperatureScale } from '../../../redux/actions';

jest.mock('../../../redux/actions', () => ({
  setTemperatureScale: jest.fn(),
}));

describe('TemperatureScaleButtonContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<TemperatureScaleButtonContainer />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
  describe('mapStateToProps', () => {
    test('should return right value', () => {
      const initialState = {
        temperatureScale: 'celsius',
      }

      expect(mapStateToProps(initialState)).toEqual({
        temperatureScale: 'celsius',
      });
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onScaleButtonClick should dispatch setTemperatureScale action', () => {
      const dispatch = jest.fn();
      const {onScaleButtonClick} = mapDispatchToProps(dispatch);

      onScaleButtonClick();

      expect(setTemperatureScale).toHaveBeenCalled();
    });
  });
});
