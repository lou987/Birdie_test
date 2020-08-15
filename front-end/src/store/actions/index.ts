import types from '@App/constants/dispatchTypes';


// Get event's recipient actions 
export const getRecipientEvents = () => {
    return { type: types.GET_RECIPIENT_EVENTS_REQUEST }
}

export const setRecipientEvents = (data: any) => {
    return {
        type: types.GET_RECIPIENT_EVENTS_SUCCESS,
        payload: data
    }
}
export const errorRecipientEvents = () => {
    return {
        type: types.GET_RECIPIENT_EVENTS_FAILURE,
    }
}

// Get Recipient's ids
export const getRecipients = () => {
    return { type: types.GET_RECIPIENTS_REQUEST }
}

export const setRecipients = (data: any) => {
    return {
        type: types.GET_RECIPIENTS_SUCCESS,
        payload: data
    }
}
export const errorRecipients = () => {
    return {
        type: types.GET_RECIPIENTS_FAILURE,
    }
}

// Get Observation dates for one recipient
export const getRecipientDates = () => {
    return { type: types.GET_RECIPIENT_DATES_REQUEST }
}

export const setRecipientDates = (data: any) => {
    return {
        type: types.GET_RECIPIENT_DATES_SUCCESS,
        payload: data
    }
}
export const errorRecipientDates = () => {
    return {
        type: types.GET_RECIPIENT_DATES_FAILURE,
    }
}

// Get Observation for recipient by date
export const getObservationRecipientByDate = () => {
    return { type: types.GET_EVENTS_RECIPIENT_BY_DATE_REQUEST }
}

export const setObservationRecipientByDate = (data: any) => {
    return {
        type: types.GET_EVENTS_RECIPIENT_BY_DATE_SUCCESS,
        payload: data
    }
}
export const errorObservationRecipientByDate = () => {
    return {
        type: types.GET_EVENTS_RECIPIENT_BY_DATE_FAILURE,
    }
}

// Get Observation for recipient by event_type
export const getObservationRecipientByEventType = () => {
    return { type: types.GET_EVENTS_RECIPIENT_BY_EVENT_TYPE_REQUEST }
}

export const setObservationRecipientByEventType = (data: any) => {
    return {
        type: types.GET_EVENTS_RECIPIENT_BY_EVENT_TYPE_SUCCESS,
        payload: data
    }
}
export const errorObservationRecipientByEventType = () => {
    return {
        type: types.GET_EVENTS_RECIPIENT_BY_EVENT_TYPE_FAILURE,
    }
}




