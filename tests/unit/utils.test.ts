// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { calculateCoordsFromChild } from "../../src/lib/utils";
import type { CalculateCoordsFromChildArg } from "../../src/lib/types";

describe("calculateCoodsFromChild", () => {
  it("returns the correct coordinate values", () => {
    const el = global.document.createElement("div") as HTMLElement;
    el.style.width = "200px";
    el.style.height = "200px";
    el.style.left = "200px";
    el.style.top = "200px";

    const args:CalculateCoordsFromChildArg = {
      eventX: 100,
      eventY: 100, 
      childX: 300, 
      childY: 300,
      container: el,
    };

    const res = calculateCoordsFromChild(args);
    expect(res).toMatchObject({ x: 400, y: 400 });
  });
});
