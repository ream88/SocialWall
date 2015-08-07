import React, { Component } from 'react';
import InstagramApp from '../../containers/InstagramApp';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { provide } from 'react-redux';
import thunk from 'redux-thunk';
import logger from '../../middlewares/logger';
import * as reducers from '../../reducers';
import * as InstagramActions from '../../actions/InstagramActions';


const reducer = combineReducers(reducers);
const store = applyMiddleware(logger, thunk)(createStore)(reducer);


store.dispatch(InstagramActions.load('tags/nofilter/media/recent'));


@provide(store)
export default class App extends Component {
  render() {
    return <InstagramApp />;
  }
}
