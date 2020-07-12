import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import styles from './MapBox.module.css';

export default function MapBox({ lon, lat }) {
  const mapContainer = useRef();
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FnYXJpbjg4MDEyMCIsImEiOiJjazNicHc1NW4wOHFvM251aXg3YzlheDFmIn0.C2XPJXYAzS1e0OjVNFC-NQ';
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lon, lat],
      zoom: 8,
    });
    // map.on('move', () => {
    //   console.log(map.getZoom().toFixed(2));
    // });
  }, [mapContainer, lon, lat]);
  return (
    <div ref={mapContainer} className={styles.container} />
  );
}

MapBox.propTypes = {
  lon: PropTypes.number,
  lat: PropTypes.number,
};

MapBox.defaultProps = {
  lon: 0,
  lat: 0,
};
