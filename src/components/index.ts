import { Server } from "../server/interface";
import { Components } from "./interface";
import EventInit from "./events/index";
import { Events } from "./events/interface";

export default class ComponentsInit implements Components {
  app: Server;
  events: Events;

  constructor(app: Server) {
    this.app = app;
    this.events = new EventInit(app);
  }
}
