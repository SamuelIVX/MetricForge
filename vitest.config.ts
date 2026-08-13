/**
 * Vitest config for MetricForge UI tests.
 * jsdom environment, `@/` alias, UTC TZ, and setup from `vitest.setup.ts`.
 */
import { defineConfig } from "vitest/config";
import path from "path";

/**
 * Vitest + Vite resolve config for app tests.
 */
export default defineConfig({
    test: {
        environment: "jsdom",
        setupFiles: ["./vitest.setup.ts"],
        include: ["app/**/*.test.{ts,tsx}", "src/**/*.test.{ts,tsx}"],
        globals: true,
        css: false,
        env: {
            TZ: "UTC",
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "."),
        },
    },
    css: {
        postcss: {},
    },
});
