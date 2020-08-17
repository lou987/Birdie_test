import types from '@App/constants/dispatchTypes';
import { getRecipientDatesSaga } from '@App/store/sagas/dateRecipient';
import {
  getObservationRecipientByDate,
  getObservationRecipientByEventType,
  getRecipientEventsSaga,
  getRecipientsSaga
} from '@App/store/sagas/eventRecipient';
import { Action } from 'redux';
import { all, takeEvery } from 'redux-saga/effects';

interface AppAction extends Action<any> {
  payload: any | Array<any>
}

export function* initSaga() {
  yield all([
    takeEvery<AppAction>(
      types.GET_RECIPIENT_EVENTS_REQUEST,
      ({ payload }) => getRecipientEventsSaga(payload)
    ),
    takeEvery<AppAction>(
      types.GET_RECIPIENTS_REQUEST,
      ({ }) => getRecipientsSaga()
    ),
    takeEvery<AppAction>(
      types.GET_RECIPIENT_DATES_REQUEST,
      ({ payload }) => getRecipientDatesSaga(payload)
    ),
    takeEvery<AppAction>(
      types.GET_EVENTS_RECIPIENT_BY_DATE_REQUEST,
      ({ payload }) => getObservationRecipientByDate(payload[0], payload[1])
    ),
    takeEvery<AppAction>(
      types.GET_EVENTS_RECIPIENT_BY_EVENT_TYPE_REQUEST,
      ({ payload }) => getObservationRecipientByEventType(payload[0], payload[1])
    ),
  ]);
}

export default initSaga;