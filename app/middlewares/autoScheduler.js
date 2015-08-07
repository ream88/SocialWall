import INSTAGRAM_LOAD from '../constants/ActionTypes';


const autoScheduler = store => next => action => {
  switch (action.type) {
    case INSTAGRAM_LOAD:
      setInterval(() => next(action), 1000);
      return next(action);

    default:
      return next(action);
  }
};

export default autoScheduler;
