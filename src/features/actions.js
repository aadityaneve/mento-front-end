import axios from 'axios';
import stringSimilarity from 'string-similarity';
import {
    GET_ALL_TOPICS,
    GET_ALL_TOPICS_DETAILS,
    ERROR_MESSAGE,
    SET_FILTERED_TOPICS,
    SET_ON_CLICK_TOPIC,
    SET_ON_CLICK_TOPIC_DETAILS,
    SET_PROFILE,
    REMOVE_PROFILE,
} from './actionTypes';

export const getAllTopics = () => (dispatch) => {
    axios
        .get(`https://mento-server.herokuapp.com/all-topics`)
        .then((response) => {
            dispatch(setAllTopics(response.data));
            dispatch(setErrorMessage(null));
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
        })
        .catch((error) => {
            dispatch(setErrorMessage(error.message));
            console.log(error.message);
        });
};

export const setFilteredTopics = (data, topic) => (dispatch) => {
    topic = topic.toLowerCase();

    let similarity = 0;
    let newData = data.filter((data) => {
        similarity = stringSimilarity.compareTwoStrings(
            topic,
            data.heading.toLowerCase()
        );
        if (similarity > 0.7) {
            return data;
        }
    });
    dispatch(filteredTopics(newData));
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

export const filteredTopics = (data) => {
    return {
        type: SET_FILTERED_TOPICS,
        payload: data,
    };
};

export const setOnClickTopic = (data) => {
    return {
        type: SET_ON_CLICK_TOPIC,
        payload: data,
    };
};

export const setOnClickTopicDetails = (data) => {
    return {
        type: SET_ON_CLICK_TOPIC_DETAILS,
        payload: data,
    };
};

export const setProfile = (data) => {
    return {
        type: SET_PROFILE,
        payload: data,
    };
};

export const removeProfile = (data = null) => {
    return {
        type: REMOVE_PROFILE,
        payload: data,
    };
};
