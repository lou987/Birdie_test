import initialState from './initialState';
import types from '@App/constants/dispatchTypes';

export default (state = initialState.recipients, action: any) => {
    switch (action.type) {
        case types.GET_RECIPIENTS_REQUEST: {
            return Object.assign({}, state, {
                isFetching: true,
            });
        }
        case types.GET_RECIPIENTS_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                error: false
            });
        }
        case types.GET_RECIPIENTS_FAILURE: {
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            });
        }

        default:
            return state
    }
}