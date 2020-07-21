import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AddressContainer, mapStateToProps } from '../AddressContainer';

describe('AddressContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<AddressContainer />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    test('should return the right value', () => {

      const initialState = {
        address: 'Brest, Belarus',
        countryFlagURL: 'url',
      };

      expect(mapStateToProps(initialState)).toEqual({
        address: 'Brest, Belarus',
        countryFlagURL: 'url',
      });
    });
  })
});
