import axios from 'axios';
import { GET_ALL_TOPICS, GET_ALL_TOPICS_DETAILS } from './actionTypes';

export const getAllTopics = () => (dispatch) => {
    axios
        .get(`https://mento-server.herokuapp.com/all-topics`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export const getAllTopicsDetails = () => (dispatch) => {
    axios
        .get(`https://mento-server.herokuapp.com/all-topics-details`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export const fetchAllTopics = (data) => {
    return {
        type: GET_ALL_TOPICS,
        payload: data,
    };
};

export const fetchAllTopicsDetails = (data) => {
    return {
        type: GET_ALL_TOPICS_DETAILS,
        payload: data,
    };
};
