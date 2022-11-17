import { EventBodyRequest, EventsController } from "./controller.interface";
import { Server } from "../../server/interface";
import { Response } from "express";
import { getRequestError } from "../../helpers/errors";
import HttpStatusCode from "../../helpers/http_status_code";
import { TypedRequestBody } from "../types";

export default class Controller implements EventsController {
  app: Server;
  constructor(app: Server) {
    this.app = app;
  }
  createEvent = async (
    req: TypedRequestBody<EventBodyRequest>,
    res: Response
  ): Promise<Response | void> => {
    try {
      const { firstName, lastName, email, eventDate } = req.body;

      const event = await this.app.components?.events.service.createEvent({
        firstName,
        lastName,
        email,
        eventDate: new Date(parseInt(eventDate)),
      });

      if (!event) {
        return res
          .status(HttpStatusCode.CONFLICT)
          .send({ error: "Something went wrong , please try again" });
      }

      return res.status(HttpStatusCode.OK).json({ message: "ok" });
    } catch (error) {
      if (error instanceof Error) {
        getRequestError.apply(this, [res, error.message, "createEvent"]);
      }
    }
  };
}
