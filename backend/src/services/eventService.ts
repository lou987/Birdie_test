import con from "../config/connection";
con.connect()


/**
 * count events for a specific care recipient
 * @param id string
 */
export const countEventsForRecipient = (id: string) => {
    return new Promise((resolve, reject) => {
        con.query('select count(*) as count from events where care_recipient_id LIKE ?', [id], (err, array) => {
            if (err) { reject(err) }
            resolve(array[0].count)
        })
    })
}

/**
 * get distinct all recipient
 * (maybe we should add pagiantion for a big amount of data)
 */
export const getCareRecipients = () => {
    return new Promise((resolve, reject) => {
        con.query('select distinct care_recipient_id from events', (err, array) => {
            if (err) { reject(err) }
            resolve(array.map((x: { care_recipient_id: any; }) => x.care_recipient_id))
        })
    })
}

/**
 * get events related to one care recipient
 * @param id string
 */
export const getEventsForRecipient = (id: string, limit: number, offset: number) => {
    return new Promise((resolve, reject) => {
        con.query('select payload from events where care_recipient_id LIKE ? limit ? offset ?', [id, limit, offset], (err, array) => {
            if (err) { reject(err) }
            array = array.reduce((acc: any, val: any) => {
                acc.push(JSON.parse(val.payload));
                return acc;
            }, [])
            resolve(array)
        })
    })
}

/**
 * get distinct events dates  related to a care recipient
 * @param id string
 */
export const getDatesForRecipient = (id: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        con.query('SELECT DISTINCT(DATE(timestamp)) as date FROM events where care_recipient_id LIKE ?', [id], (err, array) => {
            if (err) { reject(err) }
            resolve(array.map((x: { date: any; }) => x.date))
        })
    })
}
/**
 * get visits per recipient and date
 * @param id string
 * @param date string
 */
export const getEventsForRecipientOnDate = (id: string, date: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        con.query('SELECT payload FROM events where care_recipient_id LIKE ? and DATE(timestamp) = ?', [id, date], (err, array) => {
            if (err) { reject(err) }
            array = array.reduce((acc: any, val: any) => {
                acc.push(JSON.parse(val.payload));
                return acc;
            }, [])
            resolve(array)
        })
    })
}
/**
 * get distinct event types  related to one care recipiant
 * @param id string
 */
export const getEventTypesForRecipient = (id: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        con.query('SELECT DISTINCT(event_type) as type FROM events where care_recipient_id LIKE ?', [id], (err, array) => {
            if (err) { reject(err) }
            resolve(array.map((x: { type: any; }) => x.type))
        })
    })
}

/**
 * get events per recipient and type
 * @param id string
 * @param type string
 */
export const getEventsForRecipientWithType = (id: string, type: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        con.query('SELECT payload FROM events where care_recipient_id LIKE ? and event_type LIKE ?', [id, type], (err, array) => {
            if (err) { reject(err) }
            resolve(array.reduce((acc: any, val: any) => {
                acc.push(JSON.parse(val.payload));
                return acc;
            }, []))
        })
    })
}

