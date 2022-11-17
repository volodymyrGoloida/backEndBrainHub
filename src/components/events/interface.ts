import { Server } from "../../server/interface";
import { EventsController } from "./controller.interface";
import Middleware from "./middleware";
import Service from "./service";

export interface Events {
  app: Server;
  controller: EventsController;
  middleware: Middleware;
  service: Service;
}
