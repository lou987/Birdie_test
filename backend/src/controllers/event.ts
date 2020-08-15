import * as express from "express";
import {
  countEventsForRecipient,
  getCareRecipients,
  getEventsForRecipient,
  getDatesForRecipient,
  getEventsForRecipientOnDate,
  getEventTypesForRecipient,
  getEventsForRecipientWithType
} from "../services/eventService";
export const eventController = express.Router();





/**
 * get events for a specific care recepient
 */
eventController.get('/events/:id', async (req, res) => {

  try {
    const id = req.params.id
    const limit = req.query.limit ? parseInt(req.query.limit.toString()) : 10
    const offset = req.query.offset ? parseInt(req.query.offset.toString()) : 0
    const count = req.query.count ? req.query.count : false
    // not sure if we should always count rows (extensive query)
    // we do count only once and store the total on the front-end to paginate
    const total = count ? await countEventsForRecipient(id) : -1;
    const data = await getEventsForRecipient(id, limit, offset);
    res.send({
      total,
      limit,
      offset,
      data
    })

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
});



/**
 * get distinct  care recepient's ids
 */
eventController.get('/recepient', async (_, res) => {
  try {
    res.send(await getCareRecipients())
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
});


/**
 * get distinct dates for care recepient's 
 */
eventController.get('/recepient/:id/dates', async (req, res) => {
  try {
    const id = req.params.id
    res.send(await getDatesForRecipient(id))
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
});
/**
 * get events for care recepient with date 
 */
eventController.get('/recepient/:id/dates/:date', async (req, res) => {
  try {
    const id = req.params.id
    const date = new Date(req.params.date)
    res.send(await getEventsForRecipientOnDate(id, `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`))
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
});
/**
 * get distinct types for care recepient's 
 */
eventController.get('/recepient/:id/types', async (req, res) => {
  try {
    const id = req.params.id
    res.send(await getEventTypesForRecipient(id))
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
});

/**
 * get events for care recepient with type
 */
eventController.get('/recepient/:id/types/:type', async (req, res) => {
  try {
    const id = req.params.id
    const type = req.params.type
    res.send(await getEventsForRecipientWithType(id, type))
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
});