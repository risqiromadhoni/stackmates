import { describe, expect, it } from "vitest";
import {
	camel,
	capitalize,
	dash,
	pascal,
	snake,
	template,
	title,
	trim,
} from "../string";

describe("capitalize", () => {
	it("should capitalize the first letter of a word", () => {
		expect(capitalize("hello")).toBe("Hello");
		expect(capitalize("va va voom")).toBe("Va va voom");
	});
	it("should return an empty string for empty input", () => {
		expect(capitalize("")).toBe("");
	});
});

describe("camel", () => {
	it("should return empty val", () => {
		expect(camel("")).toBe("");
		expect(camel(null)).toBe("");
		expect(camel(undefined)).toBe("");
	});
	it("should format a string in camel case", () => {
		expect(camel("hello world")).toBe("helloWorld");
		expect(camel("va va-VOOM")).toBe("vaVaVoom");
		expect(camel("helloWorld")).toBe("helloWorld");
	});
});

describe("snake", () => {
	it("should return empty val", () => {
		expect(snake("")).toBe("");
		expect(snake(null)).toBe("");
		expect(snake(undefined)).toBe("");
	});
	it("should format a string in snake case", () => {
		expect(snake("hello world")).toBe("hello_world");
		expect(snake("va va-VOOM")).toBe("va_va_voom");
		expect(snake("helloWorld")).toBe("hello_world");
	});
});

describe("dash", () => {
	it("should return empty val", () => {
		expect(dash("")).toBe("");
		expect(dash(null)).toBe("");
		expect(dash(undefined)).toBe("");
	});
	it("should format a string in dash case", () => {
		expect(dash("hello world")).toBe("hello-world");
		expect(dash("va va_VOOM")).toBe("va-va-voom");
		expect(dash("helloWorld")).toBe("hello-world");
	});
});

describe("pascal", () => {
	it("should return empty val", () => {
		expect(pascal("")).toBe("");
		expect(pascal(null)).toBe("");
		expect(pascal(undefined)).toBe("");
	});
	it("should format a string in pascal case", () => {
		expect(pascal("hello world")).toBe("HelloWorld");
		expect(pascal("va va boom")).toBe("VaVaBoom");
	});
});

describe("title", () => {
	it("should return empty val", () => {
		expect(title("")).toBe("");
		expect(title(null)).toBe("");
		expect(title(undefined)).toBe("");
	});
	it("should format a string in title case", () => {
		expect(title("hello world")).toBe("Hello World");
		expect(title("va_va_boom")).toBe("Va Va Boom");
		expect(title("queryItems")).toBe("Query Items");
	});
});

describe("template", () => {
	it("should replace placeholders with values", () => {
		expect(template("Hello, {{name}}", { name: "Ray" })).toBe("Hello, Ray");
		expect(template("Welcome <user>", { user: "John" }, /<(.+?)>/g)).toBe(
			"Welcome John",
		);
	});
});

describe("trim", () => {
	it("should return empty val", () => {
		expect(trim("")).toBe("");
		expect(title(null)).toBe("");
		expect(title(undefined)).toBe("");
	});
	it("should trim spaces by default", () => {
		expect(trim("  hello ")).toBe("hello");
	});
	it("should trim specified characters", () => {
		expect(trim("__hello__", "_")).toBe("hello");
		expect(trim("/repos/:owner/:repo/", "/")).toBe("repos/:owner/:repo");
		expect(trim("222222__hello__1111111", "12_")).toBe("hello");
	});
});
