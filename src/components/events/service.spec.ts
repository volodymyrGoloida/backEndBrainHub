import { EventInstance } from "../../db/event-model";
import { createServer } from "../../server";
import { Server } from "../../server/interface";
import { clearEventTable } from "../../__tests__/database";
require("dotenv").config();

const eventFixture = {
  firstName: "andrew",
  lastName: "kitsyak",
  email: "email@email.com",
  eventDate: new Date(),
};

describe("event service", function () {
  let server: Server;
  beforeAll(async () => {
    server = await createServer();
    await clearEventTable(server);
  });
  afterAll(async () => {
    await clearEventTable(server);
  });
  it("should create EventDate and return valid event", async () => {
    const event = await server.components?.events.service.createEvent(
      eventFixture
    );
    let eventFromDB = await server.db?.Event.findOne({
      where: {
        id: event?.id,
      },
    });
    expect(eventFromDB).toBeDefined();

    eventFromDB = eventFromDB as EventInstance;
    expect(eventFromDB.firstName).toBe(eventFixture.firstName);
    expect(eventFromDB.lastName).toBe(eventFixture.lastName);
    expect(eventFromDB.email).toBe(eventFixture.email);
  });
});
