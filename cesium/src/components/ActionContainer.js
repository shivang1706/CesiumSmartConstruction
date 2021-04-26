import { uuid } from "uuidv4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBinoculars } from "@fortawesome/free-solid-svg-icons";

const ActionContainer = ({
  itemsList,
  setItemsList,
  activeItem,
  setActiveItem
}) => {
  // Add default item entry on click of add button
  const addNewItem = () => {
    setItemsList([
      ...itemsList,
      {
        id: uuid(),
        index: itemsList.length,
        name: "New Material",
        color: "#3FD8BB",
        vol: 0,
        cost: 0.0,
        deliveryDate: ""
      }
    ]);
  };

  const removeItem = () => {
    const updatedItems = [...itemsList];
    if(updatedItems.length >0){
          updatedItems.splice(activeItem.index, 1);
    setActiveItem(null); //remove active item
    setItemsList(updatedItems); //set the global items list without the active item
    }

  };

  return (
    <div className="action-container">
      <button className="add-btn" onClick={addNewItem}>
        <FontAwesomeIcon icon={faPlus} />
        &nbsp;Add
      </button>
      <button onClick={removeItem}>
        <FontAwesomeIcon icon={faBinoculars} />
        &nbsp;Delete
      </button>
    </div>
  );
};

export { ActionContainer };
