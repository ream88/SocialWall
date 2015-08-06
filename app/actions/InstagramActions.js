import { INSTAGRAM_LOAD } from '../constants/ActionTypes';
import 'babel/polyfill';
import 'whatwg-fetch';


export function load() {
  return dispatch =>
    fetch(`https://api.instagram.com/v1/media/popular?client_id=${CLIENT_ID}`)
      .then(response => response.json())
      .then(json => dispatch({ type: INSTAGRAM_LOAD, images: json.data }));
}
