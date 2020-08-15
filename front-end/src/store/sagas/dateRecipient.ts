import axios from "axios";
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* getRecipientDatesSaga(id = 'ad3512a6-91b1-4d7d-a005-6f8764dd0111') {
    try {

        const response = yield axios.get(`http://localhost:8000/recepient/${id}/dates`);
        yield put(actions.setRecipientDates(response.data));

    } catch (error) {

        yield put(actions.errorRecipientDates());
    }
};