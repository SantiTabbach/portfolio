import { Key } from 'react';

interface IBaseList<T extends { key?: Key }, P = object> {
	items: T[];
	resourceName: string;
	itemComponent: React.ComponentType<P>;
}

const BaseList = <T extends object & { key?: Key }, P>({
	items,
	resourceName,
	itemComponent: ItemComponent,
}: IBaseList<T, P>) => {
	return items.map((item, index) => {
		return (
			<ItemComponent
				key={item.key ?? index}
				{...({ [resourceName]: item } as P)}
			/>
		);
	});
};

export default BaseList;
