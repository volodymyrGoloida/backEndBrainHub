import { Response } from "express";
import HttpStatusCode from "./http_status_code";

export function getRequestError(
  this: any,
  res: Response,
  errorMessage: string,
  functionName: string
): void {
  this.app.logger?.error(`Error: ${errorMessage}`, {
    functionName,
  });
  res.status(HttpStatusCode.EXPECTATION_FAILED).json({ error: errorMessage });
}
