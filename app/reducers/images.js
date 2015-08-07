import { INSTAGRAM_LOAD } from '../constants/ActionTypes';



export default function images(state = [], action) {
  switch (action.type) {
    case INSTAGRAM_LOAD:
      return action.images;

    default:
      return state;
  }
}
