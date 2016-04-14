const FETCH_SUCCESS = 'AirQ/sensors/FETCH_SUCCESS';
const FETCH_REQUEST = 'AirQ/sensors/FETCH_REQUEST';
const FETCH_FAILURE = 'AirQ/sensors/FETCH_FAILURE';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.payload.map((sensor) => {
        const { id, temp, pm25, pm10, no2a, no2b, srv_ts } = sensor.properties.layers['test.airq'].data;

        return {
          id,
          temp,
          pm25,
          pm10,
          no2a,
          no2b,
          timestamp: srv_ts,
        };
      }).reduce((sensors, sensor) =>
        Object.assign({}, sensors, {
          [sensor.id]: sensor,
        })
      , {});
    default: return state;
  }
}

export function fetchSensors() {
  return dispatch => {
    dispatch({ type: FETCH_REQUEST });
    return fetch('http://api.citysdk.waag.org/layers/test.airq/objects')
      .then(response => response.json())
      .then(json => dispatch({
        type: FETCH_SUCCESS,
        payload: json.features,
      }));
  };
}
