import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const CI = !!process.env.CI || false;

export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	define: {
		"process.env": JSON.stringify({}),
	},
	test: {
		watch: !CI,
		environment: "jsdom",
		browser: {
			enabled: !CI,
			provider: "playwright",
			// https://vitest.dev/guide/browser/playwright
			instances: [
				{ browser: "chromium" },
				{ browser: "firefox" },
				{ browser: "webkit" },
			],
		},
	},
});
