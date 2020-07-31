import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import initialState from './reducers/initialState';

const store = function configureStore(initialStore = initialState) {
  return createStore(rootReducer, initialStore, applyMiddleware(thunk));
};

export default store();
