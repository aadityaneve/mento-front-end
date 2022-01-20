import {
    GET_ALL_TOPICS,
    GET_ALL_TOPICS_DETAILS,
    ERROR_MESSAGE,
    SET_FILTERED_TOPICS,
} from './actionTypes';

const init = {
    errorMessage: null,
    allTopics: [],
    allTopicsDetails: [],
    filteredTopics: [],
};

export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case GET_ALL_TOPICS:
            return {
                ...state,
                allTopics: payload,
            };

        case GET_ALL_TOPICS_DETAILS:
            return {
                ...state,
                allTopicsDetails: payload,
            };

        case ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: payload,
            };

        case SET_FILTERED_TOPICS:
            return {
                ...state,
                filteredTopics: payload,
            };

        default:
            return state;
    }
};
