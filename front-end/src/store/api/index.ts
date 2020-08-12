const baseUrl = 'http://localhost:8000';

export const getRecipientEvents = (recipientId: String, count: Boolean = false, limit: Number = 10, offset: Number = 0) =>
    fetch(`${baseUrl}/events/${recipientId}?count=${count}&limit=${limit}&offset=${offset}`);