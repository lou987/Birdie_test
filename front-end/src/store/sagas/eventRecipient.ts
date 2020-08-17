import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';

const BASE_URL: string = '';

export function* getRecipientEventsSaga(id: string = 'ad3512a6-91b1-4d7d-a005-6f8764dd0111') {
    try {

        // tslint:disable-next-line:no-console
        console.log(id)
        const response = yield axios.get(`${BASE_URL}/events/${id}?count=true`);
        yield put(actions.setRecipientEvents(response.data));

    } catch (error) {

        yield put(actions.errorRecipientEvents());
    }
};

export function* getRecipientsSaga() {
    try {
        const response = yield axios.get(`${BASE_URL}/recipient/`);
        yield put(actions.setRecipients(response.data));
    } catch (error) {
        yield put(actions.errorRecipients());
    }
};

// tslint:disable-next-line:max-line-length
export function* getObservationRecipientByDate(id: string = 'df50cac5-293c-490d-a06c-ee26796f850d', date: string = '2019-04-26T23:00:00.000Z') {
    try {
        const response = yield axios.get(`${BASE_URL}/recipient/${id}/dates/${date}`);
        yield put(actions.setObservationRecipientByDate(response.data));

    } catch (error) {

        yield put(actions.errorObservationRecipientByDate());
    }
};

// tslint:disable-next-line:max-line-length
export function* getObservationRecipientByEventType(id: string = 'df50cac5-293c-490d-a06c-ee26796f850d', eventType: string = 'check_out') {
    try {
        const response = yield axios.get(`${BASE_URL}/recipient/${id}/types/${eventType}`);
        yield put(actions.setObservationRecipientByEventType(response.data));

    } catch (error) {

        yield put(actions.errorObservationRecipientByEventType());
    }
};
