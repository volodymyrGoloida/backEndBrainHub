import { Server } from "../server/interface";

export const clearEventTable = async (app: Server) => {
  await app.db?.Event.destroy({
    where: {},
    restartIdentity: true,
  });
};
