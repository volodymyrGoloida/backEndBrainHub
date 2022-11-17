import { DataTypes, Model, Optional, Sequelize, STRING } from "sequelize";

export type EventAttributes = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  eventDate: Date;
};

export interface EventInstance
  extends Model<EventAttributes, Omit<EventAttributes, "id">>,
    EventAttributes {}

export class EventModel {
  public static getInstance = (sequelize: Sequelize) =>
    sequelize.define<EventInstance>(
      "Event",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        eventDate: {
          field: "event_date",
          type: DataTypes.DATE,
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "first_name",
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "last_name",
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { tableName: "events", timestamps: true }
    );
}
