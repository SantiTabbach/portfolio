interface IBaseList<T, P = object> {
  items: T[];
  resourceName: string;
  itemComponent: React.ComponentType<P>;
}

const BaseList = <T extends object, P extends { key: string | number }>({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: IBaseList<T, P>) => {
  return items.map((item, index) => (
    <ItemComponent {...({ [resourceName]: item, key: index } as P)} />
  ));
};

export default BaseList;
