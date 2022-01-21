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

const init = {
    errorMessage: null,
    allTopics: [],
    allTopicsDetails: [],
    filteredTopics: [],
    onClickTopic: {},
    onClickTopicDetails: {},
    PROFILE: {},
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

        case SET_ON_CLICK_TOPIC:
            return {
                ...state,
                onClickTopic: payload,
            };

        case SET_ON_CLICK_TOPIC_DETAILS:
            return {
                ...state,
                onClickTopicDetails: payload,
            };

        case SET_PROFILE:
            return {
                ...state,
                PROFILE: payload,
            };

        case REMOVE_PROFILE:
            return {
                ...state,
                PROFILE: payload,
            };

        default:
            return state;
    }
};
