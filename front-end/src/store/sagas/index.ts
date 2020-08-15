import { takeEvery, all } from 'redux-saga/effects';
import types from '@App/constants/dispatchTypes';
import { getRecipientEventsSaga, getRecipientsSaga, getObservationRecipientByDate, getObservationRecipientByEventType } from '@App/store/sagas/eventRecipient'
import { getRecipientDatesSaga } from '@App/store/sagas/dateRecipient'


export function* initSaga() {
  yield all([
    takeEvery(types.GET_RECIPIENT_EVENTS_REQUEST, getRecipientEventsSaga),
    takeEvery(types.GET_RECIPIENTS_REQUEST, getRecipientsSaga),
    takeEvery(types.GET_RECIPIENT_DATES_REQUEST, getRecipientDatesSaga),
    takeEvery(types.GET_EVENTS_RECIPIENT_BY_DATE_REQUEST, getObservationRecipientByDate),
    takeEvery(types.GET_EVENTS_RECIPIENT_BY_EVENT_TYPE_REQUEST, getObservationRecipientByEventType),

  ]);
}

export default initSaga;