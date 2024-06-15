import { describe, expect, it } from "bun:test";
import { treaty } from "@elysiajs/eden";
import { app } from "../src/index";

const api = treaty(app);

describe("Tests", () => {
  it("Work", async () => {

    const response = await api.a.works.get();

    expect(response.data).toBe("ok");
  });
});
