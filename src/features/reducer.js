import { GET_ALL_TOPICS, GET_ALL_TOPICS_DETAILS } from './actionTypes';

const init = {
    allTopics: [],
    allTopicsDetails: [],
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

        default:
            return state;
    }
};
