
import axios from 'axios';
import Constants from '../constants';

export function fakeApiCall() {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch({
          type: Constants.FETCHED_USER,
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function test() {
  return 'nothing';
}
