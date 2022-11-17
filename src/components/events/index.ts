import { Server } from "../../server/interface";
import Controller from "./controller";
import { EventsController } from "./controller.interface";
import Middleware from "./middleware";
import Service from "./service";

export default class EventInit {
  app: Server;
  controller: EventsController;
  middleware: Middleware;
  service: Service;

  constructor(app: Server) {
    this.app = app;
    this.service = new Service(app);
    this.controller = new Controller(app);
    this.middleware = new Middleware(app);
  }
}
