import { Express } from "express";
import http from "http";
import { ModelStatic } from "sequelize";
import winston from "winston";
import { Components } from "../components/interface";
import { EventInstance } from "../db/event-model";

export interface Server extends Express {
  server?: http.Server;
  components?: Components;
  logger?: winston.Logger;
  db?: {
    Event: ModelStatic<EventInstance>;
  };
}
