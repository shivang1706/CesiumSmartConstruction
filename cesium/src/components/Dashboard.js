import { useState } from "react";

import { ActionContainer } from "./ActionContainer";
import { ItemsContainer } from "./Item/ItemsContainer";

const Dashboard = () => {
  const [itemsList, setItemsList] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="dashboard-container">
      <h2 className="header">Materials</h2>

      <ActionContainer
        itemsList={itemsList}
        setItemsList={setItemsList}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      <ItemsContainer
        itemsList={itemsList}
        setItemsList={setItemsList}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      <p className="total-amt">Total Cost: $0.00</p>
    </div>
  );
};

export { Dashboard };
