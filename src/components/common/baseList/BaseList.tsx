import { Key, ComponentType } from 'react';

/**
 * IBaseList Interface
 * @template T - Type of the individual item in the list. Can be any type, including primitives and objects.
 * @template P - Props expected by the item component. Defaults to an empty object.
 *
 * @property {T[]} items - The array of items to be rendered in the list.
 * @property {string} resourceName - The name of the prop passed to the item component, used to inject the item.
 * @property {ComponentType<P>} itemComponent - The React component used to render each item in the list.
 * @property {(item: T) => Key} [keyExtractor] - Optional function to extract the key from an item.
 */
interface IBaseList<T, P = object> {
	items: T[];
	resourceName: string;
	itemComponent: ComponentType<P>;
	keyExtractor?: (item: T) => Key;
}

/**
 * Extracts the key for an item.
 * @template T - Type of the item.
 * @param {T} item - The item to extract the key from.
 * @param {number} index - The index of the item in the list.
 * @param {(item: T) => Key} [keyExtractor] - Optional function to extract the key from the item.
 * @returns {Key} - The key to be used for the item.
 */
function getItemKey<T>(
	item: T,
	index: number,
	keyExtractor?: (item: T) => Key
): Key {
	if (keyExtractor) {
		return keyExtractor(item);
	}
	return index;
}

/**
 * BaseList Component
 * @template T - Type of the items in the list. Can be a primitive type (e.g., string) or an object.
 * @template P - Props expected by the item component.
 *
 * A generic list component that renders a list of items using the specified item component. The component is flexible
 * enough to handle items that are either objects (which might have a `key` property) or primitive types like strings
 * or numbers.
 *
 * @prop {T[]} items - The array of items to be rendered in the list.
 * @prop {string} resourceName - The name of the prop used to pass the item to the item component.
 * @prop {ComponentType<P>} itemComponent - The React component used to render each item.
 * @prop {(item: T) => Key} [keyExtractor] - Optional function to extract the key from an item.
 *
 * @returns A React element rendering the list of items.
 */
const BaseList = <T, P extends object>({
	items,
	resourceName,
	itemComponent: ItemComponent,
	keyExtractor,
}: IBaseList<T, P>) => {
	return items.map((item, index) => {
		const key = getItemKey(item, index, keyExtractor);

		return <ItemComponent key={key} {...({ [resourceName]: item } as P)} />;
	});
};

export default BaseList;
