require('dotenv').config()
import * as express from "express";
import { pingController } from "./controllers/ping";
import { eventController } from "./controllers/event";
import * as cors from "cors";

const app = express();

app.use(pingController);
app.use(eventController);
app.use(cors());


export default app;
