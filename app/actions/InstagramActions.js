import { INSTAGRAM_LOAD } from '../constants/ActionTypes';
import jsonp from 'jsonp';


export function load(what = 'media/popular') {
  return dispatch =>
    jsonp(`https://api.instagram.com/v1/${what}?client_id=${CLIENT_ID}`, {}, (_, json) =>
      dispatch({ type: INSTAGRAM_LOAD, images: json.data }));
}
