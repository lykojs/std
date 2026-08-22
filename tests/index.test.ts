import { value } from "std";
import { expect, test } from "vitest";

test("exposes a useful value from the package", () => {
  expect(value).toBe("hello world.");
});
