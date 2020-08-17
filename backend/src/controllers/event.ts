import * as express from "express";
import {
  countEventsForRecipient,
  getCareRecipients,

  getDatesForRecipient, getEventsForRecipient,

  getEventsForRecipientOnDate,

  getEventsForRecipientWithType, getEventTypesForRecipient
} from "../services/eventService";
export const eventController = express.Router();





/**
 * get events for a specific care recipient
 */
eventController.get('/events/:id', async (req, res) => {

  try {
    const id = req.params.id
    const limit = req.query.limit ? parseInt(req.query.limit.toString(), 10) : 10
    const offset = req.query.offset ? parseInt(req.query.offset.toString(), 10) : 0
    const count = req.query.count ? req.query.count : false
    // not sure if we should always count rows (extensive query)
    // we do count only once and store the total on the front-end to paginate
    const total = count ? await countEventsForRecipient(id) : -1;
    const data = await getEventsForRecipient(id, limit, offset);
    res.send({
      data,
      limit,
      offset,
      total
    })

  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error)
    res.sendStatus(500)
  }
});



/**
 * get distinct  care recipient's ids
 */
eventController.get('/recipient', async (_, res) => {
  try {
    res.send(await getCareRecipients())
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error)
    res.sendStatus(500)
  }
});


/**
 * get distinct dates for care recipient's 
 */
eventController.get('/recipient/:id/dates', async (req, res) => {
  try {
    const id = req.params.id
    res.send(await getDatesForRecipient(id))
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error)
    res.sendStatus(500)
  }
});

/**
 * get events for care recipient with date 
 */
eventController.get('/recipient/:id/dates/:date', async (req, res) => {
  try {
    const id = req.params.id
    const date = new Date(req.params.date)
    res.send(await getEventsForRecipientOnDate(id, `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`))
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error)
    res.sendStatus(500)
  }
});

/**
 * get distinct types for care recipient's 
 */
eventController.get('/recipient/:id/types', async (req, res) => {
  try {
    const id = req.params.id
    res.send(await getEventTypesForRecipient(id))
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error)
    res.sendStatus(500)
  }
});

/**
 * get events for care recipient with type
 */
eventController.get('/recipient/:id/types/:type', async (req, res) => {
  try {
    const id = req.params.id
    const type = req.params.type
    res.send(await getEventsForRecipientWithType(id, type))
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error)
    res.sendStatus(500)
  }
});