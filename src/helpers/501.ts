import { Request, Response } from "express";
import HttpStatusCode from "./http_status_code";

export const NotImplemented = (_req: Request, res: Response) =>
  res.status(HttpStatusCode.NOT_IMPLEMENTED).send("Error 501");
