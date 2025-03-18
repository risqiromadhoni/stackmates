/**
 * @description Check if the value is an object
 * @param value
 * @returns
 *
 * @example
 * isObject({}) // true
 * isObject([]) // false
 */
export const isObject = (value: unknown): value is Record<string, unknown> =>
	typeof value === "object" && value !== null;

/**
 * @description Check if the value is an object of a specific type
 * @param value
 * @param checker
 * @returns
 *
 * @example
 * isObjectOf({}, () => true) // true
 * isObjectOf([], () => true) // false
 */
export const isObjectOf = <T>(
	value: unknown,
	checker: (value: unknown) => value is T,
): value is Record<string, T> =>
	isObject(value) && Object.values(value).every(checker);
