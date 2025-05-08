import request from "supertest";
import app from "../src/app";

import {describe, it, expect} from "@jest/globals";

describe('Express App Routes', () => {
    it('Get / - Should return current date and API name', async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("now");
        expect(response.body).toHaveProperty("api", "node");
    });

    it("GET /ping - should return pong", async () => {
      const response = await request(app).get("/ping");
      expect(response.status).toBe(200);
      expect(response.text).toBe("pong");
    });

    it("GET /non-existing-route - should handle 404 errors gracefully", async () => {
      const response = await request(app).get("/non-existing-route");
      expect(response.status).toBe(404);
    });
});


