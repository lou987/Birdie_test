import axios from "axios";
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* getRecipientEventsSaga(id = 'ad3512a6-91b1-4d7d-a005-6f8764dd0111') {
    try {

        const response = yield axios.get(`http://localhost:8000/events/${id}?count=true`);
        yield put(actions.setRecipientEvents(response.data));

    } catch (error) {

        yield put(actions.errorRecipientEvents());
    }
};

export function* getRecipientsSaga() {
    try {

        const response = yield axios.get(`http://localhost:8000/recipient/`);
        yield put(actions.setRecipientEvents(response.data));

    } catch (error) {

        yield put(actions.errorRecipientEvents());
    }
};


export function* getObservationRecipientByDate(id: 'df50cac5-293c-490d-a06c-ee26796f850d', date: '2019-04-26T23:00:00.000Z') {
    try {
        const response = yield axios.get(`http://localhost:8000/recipient/${id}/dates/${date}`);
        yield put(actions.setObservationRecipientByDate(response.data));

    } catch (error) {

        yield put(actions.errorObservationRecipientByDate());
    }
};



export function* getObservationRecipientByEventType(id: 'df50cac5-293c-490d-a06c-ee26796f850d', eventType: 'check_out') {
    try {
        const response = yield axios.get(`http://localhost:8000/recipient/${id}/types/${eventType}`);
        yield put(actions.setObservationRecipientByEventType(response.data));

    } catch (error) {

        yield put(actions.errorObservationRecipientByEventType());
    }
};
