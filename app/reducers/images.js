import { INSTAGRAM_LOAD } from '../constants/ActionTypes';


export default function images(state = [], action) {
  switch (action.type) {
    case INSTAGRAM_LOAD:
      let newState = action.images;

      if (state.length === 0) return newState;

      // Filter all images which already exist in state.
      newState = newState.filter(newImage => !state.some(image => image.id === newImage.id));

      return [...(state.slice(newState.length)), ...newState];

    default:
      return state;
  }
}
