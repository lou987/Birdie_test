import types from '@App/constants/dispatchTypes';
import initialState from './initialState';

export default (state = initialState.events, action: any) => {
    switch (action.type) {

        case types.GET_RECIPIENT_EVENTS_REQUEST: {
            return Object.assign({}, state, {
                isFetching: action.payload !== state.recipient,
                recipient: action.payload
            });
        }
        case types.GET_RECIPIENT_EVENTS_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload.data,
                total: action.payload.total > -1 ? action.payload.total : state.total,
                limit: action.payload.limit,
                offset: action.payload.offset,
                error: false
            });
        }
        case types.GET_RECIPIENT_EVENTS_FAILURE: {
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            });
        }

        default:
            return state
    }
}