/**
 * Checks if the given value is a symbol.
 *
 * @param value - The value to check.
 * @returns True if the value is a symbol, otherwise false.
 */
export const isSymbol = (value: unknown): value is symbol => {
	return !!value && value.constructor === Symbol;
};

/**
 * Checks if the given value is an array.
 *
 * @param value - The value to check.
 * @returns True if the value is an array, otherwise false.
 */
export const isArray = Array.isArray;

/**
 * Checks if the given value is a plain object.
 *
 * @param value - The value to check.
 * @returns True if the value is a plain object, otherwise false.
 */
export const isObject = (value: unknown): value is Record<string, unknown> => {
	return !!value && value.constructor === Object;
};

/**
 * Checks if the given value is a primitive type.
 *
 * Primitive Types: number, string, boolean, symbol, bigint, undefined, null.
 *
 * @param value - The value to check.
 * @returns True if the value is a primitive, otherwise false.
 */
export const isPrimitive = (value: unknown): boolean => {
	return (
		value === undefined ||
		value === null ||
		(typeof value !== "object" && typeof value !== "function")
	);
};

/**
 * Checks if the given value is a function.
 *
 * @param value - The value to check.
 * @returns True if the value is a function, otherwise false.
 */
// biome-ignore lint/complexity/noBannedTypes: Allowing Function type for checking
export const isFunction = (value: unknown): value is Function => {
	return !!(value && typeof value === "function");
};

/**
 * Checks if the given value is a string.
 *
 * @param value - The value to check.
 * @returns True if the value is a string, otherwise false.
 */
export const isString = (value: unknown): value is string => {
	return typeof value === "string" || value instanceof String;
};

/**
 * Checks if the given value is an integer.
 *
 * @param value - The value to check.
 * @returns True if the value is an integer, otherwise false.
 */
export const isInt = (value: unknown): value is number => {
	return isNumber(value) && Number.isInteger(value);
};

/**
 * Checks if the given value is a floating-point number.
 *
 * @param value - The value to check.
 * @returns True if the value is a float, otherwise false.
 */
export const isFloat = (value: unknown): value is number => {
	return isNumber(value) && !Number.isInteger(value);
};

/**
 * Checks if the given value is a number.
 *
 * @param value - The value to check.
 * @returns True if the value is a number, otherwise false.
 */
export const isNumber = (value: unknown): value is number => {
	return typeof value === "number" && !Number.isNaN(value);
};

/**
 * Checks if the given value is a valid Date object.
 *
 * @param value - The value to check.
 * @returns True if the value is a Date, otherwise false.
 */
export const isDate = (value: unknown): value is Date => {
	return value instanceof Date && !Number.isNaN(value.getTime());
};

/**
 * Checks if the given value is a Promise.
 *
 * This is a best-effort approach and may not catch all promise-like objects.
 * Use `Promise.resolve(value)` for a more reliable check.
 *
 * @param value - The value to check.
 * @returns True if the value is a Promise, otherwise false.
 */
export const isPromise = <T>(value: unknown): value is Promise<T> => {
	return (
		!!value &&
		typeof (value as Promise<T>).then === "function" &&
		isFunction((value as Promise<T>).then)
	);
};

/**
 * Checks if the given value is empty.
 *
 * A value is considered empty if it is:
 * - null or undefined
 * - a boolean
 * - a number equal to 0
 * - a Date object with an invalid timestamp
 * - an object, array, Map, or Set with no entries
 *
 * @param value - The value to check.
 * @returns True if the value is empty, otherwise false.
 */
export const isEmpty = (value: unknown): boolean => {
	if (value === null || value === undefined) return true;
	if (typeof value === "boolean") return true;
	if (isNumber(value) && value === 0) return true;
	if (isDate(value) && Number.isNaN(value.getTime())) return true;
	if (isFunction(value) || isSymbol(value)) return false;

	const length = (value as { length?: number })?.length;
	if (typeof length === "number") return length === 0;

	const size = (value as { size?: number })?.size;
	if (typeof size === "number") return size === 0;

	return Object.keys(value as object).length === 0;
};
