import generic, { vitest } from "@smallmains/dev/oxlint/generic.js";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [generic, vitest],
});
