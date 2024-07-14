export const retrieveDataFromStorage = (
	key: string,
	raiseException = false
): string | null | void => {
	try {
		const value = localStorage.getItem(key);

		value && console.log(`${key} retrieved from local storage successfully`);
		return value;
	} catch (error) {
		console.error(`While getting ${key} from local storage: ${String(error)}`);

		if (raiseException) {
			throw new Error(
				`While getting ${key} from local storage: ${String(error)}`
			);
		}
	}
};

export const persistDataOnStorage = async (
	key: string,
	value: string,
	raiseException = false
) => {
	try {
		localStorage.setItem(key, value);
		console.log(`${key} writed on local storage successfully`);
	} catch (error) {
		console.error(`While setting ${key} on local storage: ${String(error)}`);

		if (raiseException) {
			throw new Error(
				`While setting ${key} on local storage: ${String(error)}`
			);
		}
	}
};

export const LS_KEYS = {
	THEME: 'theme',
	LOCALE: 'locale',
};
