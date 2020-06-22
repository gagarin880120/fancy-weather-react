function setPlace(place) {
  return {
    type: 'PLACE',
    place,
  };
}

function setCurrentWeather(weatherObj) {
  return {
    type: 'CURRENT_WEATHER',
    weatherObj,
  };
}

function getDefaultPlace() {
  const API_KEY = '60e8ad51f55486';
  return (dispatch) => fetch(`https://ipinfo.io?token=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setPlace(`${data.city}`));
    })
    .catch((e) => console.log(e));
}

export { setPlace, setCurrentWeather, getDefaultPlace };
