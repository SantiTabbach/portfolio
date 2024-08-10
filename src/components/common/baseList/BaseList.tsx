interface IBaseList<T, P = object & { key: number | string }> {
	items: T[];
	resourceName: string;
	itemComponent: React.ComponentType<P>;
}

const BaseList = <T extends object, P>({
	items,
	resourceName,
	itemComponent: ItemComponent,
}: IBaseList<T, P>) => {
	return (
		<>
			{items.map((item, index) => (
				<ItemComponent
					{...({ [resourceName]: item, key: index } as {
						key: number | string;
					} & P)}
				/>
			))}
		</>
	);
};

export default BaseList;
