import { combineReducers } from 'redux';
import subReddits from './subRedditsReducer';
import posts from './postReducer.js';

export default combineReducers({
    subReddits,
    posts,
});
