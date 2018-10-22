import config from '../config.json';
import header from './header.json'

const configVar = config[process.env.REACT_APP_ENVIRONMENT];

const fetchPermission = (token) => {
  fetch(`${configVar.API_HOST}${configVar.BASE_URL}/permission`, {
    headers: {
      token,
      ...header
    },
    method: 'GET'
  })
  .then(res => {
    console.log('res', res.status, res.headers);
  })
  .catch(function(err) {
    console.log('err', err);
  });
  return process.env.REACT_APP_ENVIRONMENT;
}

export default fetchPermission;
