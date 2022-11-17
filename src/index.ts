import { Server } from "./server/interface";
import { createServer } from "./server";

require("dotenv").config();

const PORT = process.env.PORT || 5835;

createServer().then((app) => {
  app.server &&
    app.server.listen(PORT, () => {
      app.logger?.info(`App is running on port ${PORT}`);
    });
});
