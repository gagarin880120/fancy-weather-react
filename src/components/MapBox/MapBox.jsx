import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import styles from './MapBox.module.css';

export default function MapBox({ lon, lat, mapZoom, onMapMove }) {
  const mapContainer = useRef();
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FnYXJpbjg4MDEyMCIsImEiOiJjazNicHc1NW4wOHFvM251aXg3YzlheDFmIn0.C2XPJXYAzS1e0OjVNFC-NQ';
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lon, lat],
      zoom: mapZoom,
    });
    map.on('move', () => {
      onMapMove(map.getZoom().toFixed(2));
    });
  }, [mapContainer, lon, lat]);
  return (
    <div ref={mapContainer} className={styles.container} />
  );
}

MapBox.propTypes = {
  lon: PropTypes.number,
  lat: PropTypes.number,
  mapZoom: PropTypes.string,
  onMapMove: PropTypes.func,
};

MapBox.defaultProps = {
  lon: 0,
  lat: 0,
  mapZoom: '8',
  onMapMove: null,
};
