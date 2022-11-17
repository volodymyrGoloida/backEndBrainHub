import { Request, Response } from "express";
import { TypedRequestBody } from "../types";

export type EventBodyRequest = {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
};

export interface EventsController {
  createEvent(
    req: TypedRequestBody<EventBodyRequest>,
    res: Response
  ): Promise<Response | void>;
}
