import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      include: ["src/**/*.?(c|m)[jt]s?(x)"],
      exclude: ["src/**/*.d.?(c|m)ts", "src/**/*.{test,spec}-d.?(c|m)[jt]s?(x)"],
    },
    typecheck: {
      enabled: true,
      // TODO: Remove this custom checker and set `build: true` after upgrading to Vitest 5.
      // Vitest 4 always passes `--noEmit`, so project references cannot be built and cause TS6305.
      checker: "sm-vitest-tsc-build",
      tsconfig: "./tsconfig.test.json",
    },
    expect: {
      requireAssertions: true,
    },
  },
});
