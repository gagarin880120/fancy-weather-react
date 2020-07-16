import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchField.module.css';

export default function SearchField({ onSearch, currentDateInterval, language }) {
  const [query, setQuery] = useState('');
  const [isVoiceSearchOn, setIsVoiceSearchOn] = useState(false);
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  return (
    <div>
      <input
        type="search"
        name="search"
        className={styles.searchInput}
        value={query || ''}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (query) {
              onSearch(query, currentDateInterval, language);
            }
          }
        }}
      />
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          recognition.start();
          setIsVoiceSearchOn(true);
          recognition.onresult = (e) => {
            const transcript = Array.from(e.results)
              .map((result) => result[0])
              .map((result) => result.transcript)
              .join('');
            setQuery(transcript);
            setIsVoiceSearchOn(false);
            onSearch(transcript, currentDateInterval, language);
          };
        }}
      >
        <i className="fas fa-microphone" />
      </button>
      <div className={styles.pulsatingCircle} style={{ display: isVoiceSearchOn ? 'block' : 'none' }} />
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          if (query) {
            onSearch(query, currentDateInterval, language);
          }
        }}
      >
        <i className="fas fa-search" />
      </button>
    </div>
  );
}

SearchField.propTypes = {
  onSearch: PropTypes.func,
  currentDateInterval: PropTypes.number,
  language: PropTypes.string,
};

SearchField.defaultProps = {
  onSearch: null,
  currentDateInterval: 0,
  language: 'en',
};
