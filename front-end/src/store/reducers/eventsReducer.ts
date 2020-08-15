import initialState from './initialState';
import types from '@App/constants/dispatchTypes';

export default (state = initialState.event, action: any) => {
    switch (action.type) {
        // Events By Recipient
        case types.GET_RECIPIENT_EVENTS_REQUEST: {
            return Object.assign({}, state, {
                isFetching: true,
            });
        }
        case types.GET_RECIPIENT_EVENTS_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload.data,
                error: false
            });
        }
        case types.GET_RECIPIENT_EVENTS_FAILURE: {
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            });
        }
        // Get Event's Recipient by Date
        case types.GET_EVENTS_RECIPIENT_BY_DATE_REQUEST: {
            return Object.assign({}, state, {
                isFetching: true,
            });
        }
        case types.GET_EVENTS_RECIPIENT_BY_DATE_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                error: false
            });
        }
        case types.GET_EVENTS_RECIPIENT_BY_DATE_FAILURE: {
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            });
        }

        // Get Event's Recipient By Event-Type
        case types.GET_EVENTS_RECIPIENT_BY_EVENT_TYPE_REQUEST: {
            return Object.assign({}, state, {
                isFetching: true,
            });
        }
        case types.GET_EVENTS_RECIPIENT_BY_EVENT_TYPE_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                error: false
            });
        }
        case types.GET_EVENTS_RECIPIENT_BY_EVENT_TYPE_FAILURE: {
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            });
        }

        default:
            return state
    }
}