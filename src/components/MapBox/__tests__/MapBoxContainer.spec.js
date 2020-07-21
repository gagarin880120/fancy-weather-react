import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { MapBoxContainer, mapStateToProps, mapDispatchToProps } from '../MapBoxContainer';
import { setMapZoom  } from '../../../redux/actions';

jest.mock('mapbox-gl', () => ({
  mapboxgl: null,
}));

jest.mock('../../../redux/actions', () => ({
  setMapZoom : jest.fn()
}))

describe('MapBoxContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<MapBoxContainer />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
  describe('mapStateToProps', () => {
    test('should return right value', () => {
      const initialState = {
        longitude: 25,
        latitude: 53,
        mapZoom: '8'
      }

      expect(mapStateToProps(initialState)).toEqual({
        lon: 25,
        lat: 53,
        mapZoom: '8'
      })
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onMapMove should dispatch setMapZoom action', () => {
      const dispatch = jest.fn();
      const {onMapMove} = mapDispatchToProps(dispatch);

      onMapMove();

      expect(setMapZoom).toHaveBeenCalled();
    });
  });
});
