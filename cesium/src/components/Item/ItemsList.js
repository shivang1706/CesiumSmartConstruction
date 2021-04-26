const ItemsList = ({ itemsList, activeItem, setActiveItem }) => {
  const isItemListEmpty = itemsList.length === 0;

  return (
    <div className="items-list">
      {isItemListEmpty ? (
        <span className="item-list-info">No Materials</span>
      ) : (
        <ul className="item-list-unordered">
          {itemsList.map((item) => {
            const isItemActive = (activeItem || {}).id === item.id;
            const liBgColor = isItemActive ? "#010042" : "#3f3f3f";

            return (
              <li
                key={item.id}
                onClick={() => setActiveItem(item)}
                style={{ backgroundColor: liBgColor }}
              >
                <div
                  className="item-color"
                  style={{ backgroundColor: item.color }}
                />
                <div className="item-desc">
                  <p>{item.name}</p>
                  <p>{item.vol} m3</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { ItemsList };
