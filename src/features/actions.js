import axios from 'axios';
import {
    GET_ALL_TOPICS,
    GET_ALL_TOPICS_DETAILS,
    ERROR_MESSAGE,
} from './actionTypes';

export const getAllTopics = () => (dispatch) => {
    axios
        .get(`https://mento-server.herokuapp.com/all-topics`)
        .then((response) => {
            dispatch(setAllTopics(response.data));
            dispatch(setErrorMessage(null));
            console.log(response.data);
        })
        .catch((error) => {
            dispatch(setErrorMessage(error.message));
            console.log(error.message);
        });
};

export const getAllTopicsDetails = () => (dispatch) => {
    axios
        .get(`https://mento-server.herokuapp.com/all-topics-details`)
        .then((response) => {
            dispatch(setAllTopicsDetails(response.data));
            dispatch(setErrorMessage(null));
            console.log(response.data);
        })
        .catch((error) => {
            dispatch(setErrorMessage(error.message));
            console.log(error.message);
        });
};

export const setAllTopics = (data) => {
    return {
        type: GET_ALL_TOPICS,
        payload: data,
    };
};

export const setAllTopicsDetails = (data) => {
    return {
        type: GET_ALL_TOPICS_DETAILS,
        payload: data,
    };
};

export const setErrorMessage = (error) => {
    return {
        type: ERROR_MESSAGE,
        payload: error,
    };
};
