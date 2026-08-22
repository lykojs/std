import generic, { inheritSettings, vitest } from "@smallmains/dev/oxlint/generic.js";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [generic, vitest],
  // TODO(oxc-project/oxc#24337): Remove this workaround once extended configs inherit settings.
  settings: inheritSettings,
});
