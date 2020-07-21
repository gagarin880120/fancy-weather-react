import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { LanguageSelectContainer, mapStateToProps, mapDispatchToProps } from '../LanguageSelectContainer';
import { setLanguage, getAddressBySearch } from '../../../redux/actions';

jest.mock('../../../redux/actions', () => ({
  setLanguage: jest.fn(),
  getAddressBySearch: jest.fn(),
}))

describe('LanguageSelectContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<LanguageSelectContainer />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
  describe('mapStateToProps', () => {
    test('should return right value', () => {
      const initialState = {
        query: 'moscow',
      }

      expect(mapStateToProps(initialState)).toEqual({query: 'moscow'});
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onLanguageChange should dispatch setLanguage, getAddressBySearch actions', () => {
      const dispatch = jest.fn();
      const { onLanguageChange } = mapDispatchToProps(dispatch);

      onLanguageChange();

      expect(setLanguage).toHaveBeenCalled();
      expect(getAddressBySearch).toHaveBeenCalled();
    });
  });
});
