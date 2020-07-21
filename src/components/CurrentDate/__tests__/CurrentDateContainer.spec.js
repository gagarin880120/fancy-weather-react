import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { CurrentDateContainer, mapStateToProps } from '../CurrentDateContainer';

describe('CurrentDateContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<CurrentDateContainer />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    test('should return right value', () => {
      const initialState = {
        currentDate: '2020-07-20 15:09:14',
        language: 'en',
      }

      expect(mapStateToProps(initialState)).toEqual({currentDate: 'Mon, 20 July, 15:09'});
    });
  });
});
