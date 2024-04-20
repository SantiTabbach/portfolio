interface RegularListProps<T, P = object> {
  items: T[];
  resourceName: string;
  itemComponent: React.ComponentType<P>;
}

const RegularList = <T extends object, P extends { key: string | number }>({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: RegularListProps<T, P>) => {
  return items.map((item, index) => (
    <ItemComponent {...({ [resourceName]: item, key: index } as P)} />
  ));
};

export default RegularList;
