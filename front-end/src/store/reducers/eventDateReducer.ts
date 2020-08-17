import types from '@App/constants/dispatchTypes';
import initialState from './initialState';

export default (state = initialState.dates, action: any) => {
    switch (action.type) {
        case types.GET_RECIPIENT_DATES_REQUEST: {
            return Object.assign({}, state, {
                isFetching: true,
            });
        }
        case types.GET_RECIPIENT_DATES_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                error: false
            });
        }
        case types.GET_RECIPIENT_DATES_FAILURE: {
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            });
        }

        default:
            return state
    }
}