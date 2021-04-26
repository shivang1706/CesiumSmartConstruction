import { Input } from "../Input";

const LABEL_ID_MAP = {
  name: "Name",
  color: "Color",
  vol: "Volume(m3)",
  cost: "Cost(USD per m3)",
  deliveryDate: "Delivery Date"
};

const ItemsDescription = ({ activeItem, setItemsList }) => {
  const setActiveItem = (labelId, value) => {
    const newDetails = {
      ...activeItem,
      ...{
        [labelId]: value
      }
    };
    setItemsList(newDetails);
  };

  return (
    <div className="items-desc-list">
      {activeItem !== null && (
        <div key={activeItem.id}>
          {Object.keys(activeItem).map((label) => {
            const itemLabel = LABEL_ID_MAP[label];

            return (
              itemLabel && (
                <Input
                  label={itemLabel}
                  defaultVal={activeItem[label]}
                  setValue={setActiveItem}
                  labelId={label}
                />
              )
            );
          })}
        </div>
      )}
    </div>
  );
};

export { ItemsDescription };
