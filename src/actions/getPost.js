// import axios from 'axios';
import { GET_POSTS } from './cont';

export const getPost = (posts) => async (dispatch) => {
    dispatch({
        type: GET_POSTS,
        payload: posts,
    });
};
