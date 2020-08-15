import { combineReducers } from 'redux';
import recipientReducer from './recipientReducer'
import eventsReducer from './eventsReducer'
import eventDateReducer from './eventDateReducer'
import initialState from './initialState';

export type RootState = Readonly<typeof initialState>;

export const rootReducer = combineReducers<RootState>({
    recipientReducer,
    eventsReducer,
    eventDateReducer
});