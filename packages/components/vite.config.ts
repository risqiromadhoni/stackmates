import { resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({ rollupTypes: true, tsconfigPath: "./tsconfig.json" }),
	],
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, "src/main.ts"),
			formats: ["es"],
			fileName: "main",
			name: "components",
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime"],
		},
	},
});
