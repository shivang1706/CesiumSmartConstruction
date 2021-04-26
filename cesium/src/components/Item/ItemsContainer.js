import { ItemsList } from "./ItemsList";
import { ItemsDescription } from "./ItemDescription";

const ItemsContainer = ({
  itemsList,
  setItemsList,
  activeItem,
  setActiveItem
}) => {
  const replaceOldItem = (activeItem) => {
    const oldItem = itemsList[activeItem.index];
    const newItem = { ...oldItem, ...activeItem };

    const updatedItems = [...itemsList];
    updatedItems[activeItem.index] = newItem;
    setActiveItem(newItem); //set the active item to update itemsdesc values
    setItemsList(updatedItems); //set the global items list state
  };

  return (
    <div className="items-container">
      <ItemsList
        itemsList={itemsList}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      <ItemsDescription activeItem={activeItem} setItemsList={replaceOldItem} />
    </div>
  );
};

export { ItemsContainer };
