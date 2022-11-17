import { EventAttributes } from "../../db/event-model";
import { Server } from "../../server/interface";

export default class Service {
  app: Server;

  constructor(app: Server) {
    this.app = app;
  }

  public createEvent = (eventData: Omit<EventAttributes, "id">) =>
    this.app.db?.Event.create(eventData);
}
