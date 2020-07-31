import axios from 'axios';
import { GET_SUBREDDITS } from './cont';

export const getReddits = () => async (dispatch) => {
    const response = await axios.get('https://www.reddit.com/.json');
    const result = response.data.data.children;
    dispatch({
        type: GET_SUBREDDITS,
        payload: result,
    });
};
