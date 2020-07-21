import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { SearchFieldContainer, mapStateToProps, mapDispatchToProps } from '../SearchFieldContainer';
import { setQuery, getAddressBySearch } from '../../../redux/actions';

jest.mock('../../../redux/actions', () => ({
  setQuery: jest.fn(),
  getAddressBySearch: jest.fn(),
}));

describe('SearchFieldContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<SearchFieldContainer />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
  describe('mapStateToProps', () => {
    test('should return right value', () => {
      const initialState = {
        currentDateInterval: 15,
        language: 'en',
      }

      expect(mapStateToProps(initialState)).toEqual({
        currentDateInterval: 15,
        language: 'en',
      });
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onSearch should dispatch setQuery, getAddressBySearch action', () => {
      const dispatch = jest.fn();
      const {onSearch} = mapDispatchToProps(dispatch);

      onSearch();

      expect(setQuery).toHaveBeenCalled();
      expect(getAddressBySearch).toHaveBeenCalled();
    });
  });
});
