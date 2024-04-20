interface IRegularList<T, K> {
  items: T[];
  resourceName: string;
  itemComponent: React.FC<K>;
}

const RegularList = <T, K>({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: IRegularList<T, K>) => {
  return items.map((item, index) => (
    <ItemComponent key={index} {...{ [resourceName]: item }} /> //TODO: Fix type
  ));
};

export default RegularList;
