import { createStore ,applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {fetchList} from '../actions'


export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk,logger));
  //console.log(store.getState())
  return store;
}