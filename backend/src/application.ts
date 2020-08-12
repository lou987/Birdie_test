require('dotenv').config()
import * as express from "express";
import { pingController } from "./controllers/ping";
import { eventController } from "./controllers/event";

const app = express();

app.use(pingController);
app.use(eventController);


export default app;
