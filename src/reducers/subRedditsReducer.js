import initialState from './initialState';
import { GET_SUBREDDITS } from '../actions/cont';

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SUBREDDITS:
            return {
                ...state,
                subReddits: action.payload
            }
        default:
            return { ...state }
    }
};
