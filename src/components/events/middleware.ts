import { NextFunction, Response } from "express";
import HttpStatusCode from "../../helpers/http_status_code";
import {
  checkIsDate,
  validateEmptyFieldsInObject,
  isValidEmailLength,
  validateEmail,
} from "../../helpers/validators";
import { Server } from "../../server/interface";
import { TypedRequestBody } from "../types";
import { EventBodyRequest } from "./controller.interface";

export default class Middleware {
  app: Server;
  constructor(app: Server) {
    this.app = app;
  }
  verifyEventCreateFields = (
    req: TypedRequestBody<EventBodyRequest>,
    res: Response,
    next: NextFunction
  ) => {
    const { firstName, lastName, email, eventDate } = req.body;
    const requstedBody = { firstName, lastName, email, eventDate };

    const warnings =
      validateEmptyFieldsInObject<EventBodyRequest>(requstedBody);

    if (warnings && warnings.length > 0) {
      return res.status(HttpStatusCode.BAD_REQUEST).send(warnings);
    }

    if (!isValidEmailLength(email)) {
      warnings?.push({
        key: "email",
        errorMessage: "Length for email can be at least 3 chars",
      });
      return res.status(HttpStatusCode.BAD_REQUEST).send(warnings);
    }
    if (!validateEmail(email)) {
      warnings?.push({
        key: "email",
        errorMessage: "Invalid value",
      });
    }

    if (!checkIsDate(eventDate)) {
      warnings?.push({
        key: "eventDate",
        errorMessage: "Invalid value",
      });
    }

    if (warnings && warnings.length > 0) {
      return res.status(HttpStatusCode.BAD_REQUEST).send(warnings);
    }

    return next();
  };
}
