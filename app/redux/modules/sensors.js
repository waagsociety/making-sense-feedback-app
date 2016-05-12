import moment from 'moment';

const FETCH_SUCCESS = 'AirQ/sensors/FETCH_SUCCESS';
const FETCH_REQUEST = 'AirQ/sensors/FETCH_REQUEST';
const FETCH_FAILURE = 'AirQ/sensors/FETCH_FAILURE';

const TESTID_CUTOFF = 100; // Everything below this id is a test id
const OFFLINE_THRESHOLD = 15; // Time in minutes

/**
 * Sensors reducer which handles the state of all AirQ sensors in the application
 *
 * @return {Object} Key-value store of sensors
 */
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.payload
        .filter((sensor) => sensor.properties.layers['airq'].data.id > TESTID_CUTOFF)
        .map((sensor) => {
          const { data } = sensor.properties.layers['airq'];
          const online = moment().diff(moment(data.srv_ts), 'minutes') < OFFLINE_THRESHOLD;

          return {
            id: data.id,
            readings: [
              // { name: 'Temperature', value: data.temp },
              { name: 'PM25', value: data.pm25 },
              { name: 'PM10', value: data.pm10 },
              { name: 'NO2', value: data.no2a },
              { name: 'NO2(b)', value: data.no2b },
            ],
            temperature: data.temp,
            humidity: data.humidity,
            timestamp: data.srv_ts,
            status: online ? 'online' : 'offline',
          };
        })
        .reduce((sensors, sensor) =>
          Object.assign({}, sensors, {
            [sensor.id]: sensor,
          })
        , {});
    case FETCH_FAILURE:
      return {};
    default: return state;
  }
}

/**
 * Exposes `fetchSensors` action which starts fetching all AirQ
 * sensors from the CitySDK API.
 */
export function fetchSensors() {
  return dispatch => {
    dispatch({ type: FETCH_REQUEST });
    return fetch('http://api.citysdk.waag.org/layers/airq/objects?per_page=25')
      .then(response => response.json())
      .then(json => dispatch({
        type: FETCH_SUCCESS,
        payload: json.features,
      }));
  };
}
