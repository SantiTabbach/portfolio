export enum LS_KEYS {
	THEME = 'theme',
	LOCALE = 'locale',
}

/**
 * Handles errors encountered during localStorage operations.
 * @param key - The key for the localStorage item.
 * @param error - The error encountered.
 * @param raiseException - Whether to throw an exception.
 * @param action - The action being performed (retrieving, setting, removing).
 */
const handleError = (
	key: string,
	error: unknown,
	raiseException: boolean,
	action: string
) => {
	const errorMessage = `Error while ${action} ${key} from local storage: ${String(
		error
	)}`;
	console.error(errorMessage);

	if (raiseException) {
		throw new Error(errorMessage);
	}
};

/**
 * Logs a success message for localStorage operations.
 * @param key - The key for the localStorage item.
 * @param action - The action performed (retrieved, written, removed).
 */
const logSuccess = (key: string, action: string) => {
	console.log(`${key} ${action} from local storage successfully`);
};

/**
 * Retrieves data from localStorage.
 * @param key - The key for the localStorage item.
 * @returns The retrieved value or null if not found.
 */
const retrieveData = (key: string): string | null => {
	return localStorage.getItem(key);
};

/**
 * Persists data to localStorage.
 * @param key - The key for the localStorage item.
 * @param value - The value to store.
 */
const persistData = (key: string, value: string): void => {
	localStorage.setItem(key, value);
};

/**
 * Removes data from localStorage.
 * @param key - The key for the localStorage item.
 */
const removeData = (key: string): void => {
	localStorage.removeItem(key);
};

/**
 * Removes multiple data items from localStorage.
 * @param keys - The keys for the localStorage items to remove.
 */
const removeMultipleData = (keys: string[]): void => {
	keys.forEach((key) => localStorage.removeItem(key));
};

/**
 * Creates a function to retrieve data from localStorage.
 * @param key - The key for the localStorage item.
 * @param raiseException - Whether to throw an exception on error.
 * @returns A function that retrieves the data.
 */
export const createRetrieveData = (key: LS_KEYS, raiseException = false) => {
	return () => {
		try {
			const value = retrieveData(key);
			logSuccess(key, 'retrieved');
			return value;
		} catch (error) {
			handleError(key, error, raiseException, 'retrieving');
		}
	};
};

/**
 * Creates a function to persist data to localStorage.
 * @param key - The key for the localStorage item.
 * @param raiseException - Whether to throw an exception on error.
 * @returns A function that persists the data.
 */
export const createPersistData = (key: LS_KEYS, raiseException = false) => {
	return (value: string) => {
		try {
			persistData(key, value);
			logSuccess(key, 'written');
		} catch (error) {
			handleError(key, error, raiseException, 'setting');
		}
	};
};

/**
 * Creates a function to remove data from localStorage.
 * @param keys - The key(s) for the localStorage items to remove.
 * @param raiseException - Whether to throw an exception on error.
 * @returns A function that removes the data.
 */
export const createRemoveData = (
	keys: LS_KEYS | LS_KEYS[],
	raiseException = false
) => {
	return () => {
		try {
			Array.isArray(keys) ? removeMultipleData(keys) : removeData(keys);
			logSuccess(keys.toString(), 'removed');
		} catch (error) {
			handleError(keys.toString(), error, raiseException, 'removing');
		}
	};
};

export const persistThemeOnStorage = createPersistData(LS_KEYS.THEME);
export const removeThemeFromStorage = createRemoveData(LS_KEYS.THEME);
export const retrieveThemeFromStorage = createRetrieveData(LS_KEYS.THEME);

export const persistLocaleOnStorage = createPersistData(LS_KEYS.LOCALE);
export const removeLocaleFromStorage = createRemoveData(LS_KEYS.LOCALE);
export const retrieveLocaleFromStorage = createRetrieveData(LS_KEYS.LOCALE);
