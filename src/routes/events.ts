import { Server } from "../server/interface";
import express, { Router } from "express";
import { NotImplemented } from "../helpers/501";

export default class Events {
  app: Server;
  router: Router = express.Router();

  constructor(app: Server) {
    this.app = app;

    this.setupRouter = this.setupRouter.bind(this);

    this.setupRouter();
  }

  setupRouter() {
    const router = this.router;
    router.post(
      "/create",
      [
        this.app.components?.events.middleware.verifyEventCreateFields ||
          NotImplemented,
      ],
      this.app.components?.events.controller.createEvent || NotImplemented
    );
  }
}
