import { Sequelize } from "sequelize";
import { EventModel } from "./event-model";

export async function connectDataBase() {
  const currentDbURI =
    process.env.NODE_ENV !== "test"
      ? process.env.DB_URI
      : process.env.DB_URI_TEST;

  const sequelize = new Sequelize(currentDbURI as string, {
    dialect: "postgres",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  });

  const Event = EventModel.getInstance(sequelize);

  await Event.sync();

  return { Event };
}
