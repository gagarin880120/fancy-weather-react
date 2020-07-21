import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import MapBox from '../MapBox';
import mapboxgl from 'mapbox-gl';

jest.mock('mapbox-gl', () => ({
  Map: () => ({
    getZoom: () => ({
      toFixed: jest.fn(),
    }),
    on: jest.fn((type, listener = jest.fn()) => {
      listener();
    }),
  }),
  Marker: () => ({
    setLngLat: jest.fn(),
    addTo: jest.fn(),
  }),
}));

describe('MapBox', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<MapBox />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });

  describe('mount with testRenderer', () => {
    const onMapMove = jest.fn();
    const testRenderer = TestRenderer.create(
    <MapBox
      lon={23}
      lat={52}
      onMapMove={onMapMove}
    />
    );
    const map = new mapboxgl.Map();
    test('when latitude and longitude are updated', () => {
      act(() => {
        testRenderer.update(
          <MapBox
            lon={25}
            lat={55}
            onMapMove={onMapMove}
            zoom="8"
          />
        );
      });

      act(() => {
        map.on();
      })
      expect(onMapMove).toHaveBeenCalled();
    });
  });
});
