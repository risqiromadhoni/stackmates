import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

const CI = !!process.env.CI || false;

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			watch: !CI,
			include: ["./src/**/__test__/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
			coverage: {
				enabled: true,
				provider: "istanbul",
				reporter: ["text", "html", "clover", "json", "json-summary"],
				reportOnFailure: CI,
			},
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
	}),
);
