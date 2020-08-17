import { combineReducers } from 'redux';
import dates from './eventDateReducer';
import events from './eventsReducer';
import recipients from './recipientReducer';

interface HttpRequestState<T> {
    data: Array<T>,
    error: boolean,
    isFetching: boolean
}
interface PaginationState {
    limit: number,
    offset: number,
    total: number
}
interface EventModel {
    id: string,
    event_type: string,
    timestamp: string
}
export interface RootState {
    events: RecipientEventsState,
    dates: RecipientDatesState,
    recipients: RecipientsState
}

export interface RecipientEventsState extends HttpRequestState<EventModel>, PaginationState {
    recipient: string
}
export interface RecipientsState extends HttpRequestState<string> { }
export interface RecipientDatesState extends HttpRequestState<string> { }

export const rootReducer = combineReducers<RootState>({
    recipients,
    events,
    dates
});