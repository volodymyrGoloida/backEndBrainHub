import { Server } from "../server/interface";
import express, { Router } from "express";

import Events from "./events";

export default class Routes {
  app: Server;
  router: Router = express.Router();

  constructor(app: Server) {
    this.app = app;

    this.initVersion();
    this.initRouters();
  }

  initVersion = () => {
    this.app.use("/", this.router);
  };

  initRouters = () => {
    this.router.use("/events", new Events(this.app).router);
  };
}
