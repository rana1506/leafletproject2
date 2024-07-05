import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addShip, removeShip } from "../features/shiplist/shiplistSlice";

const initialValues = {
  name: "",
  lat: 0,
  lon: 0,
  anchored: false,
  course: 90,
  speed: 10,
};
const ShipComponent = () => {
  const [values, setValues] = useState(initialValues);
  const count = useSelector((state) => state.ship.count);
  const ships = useSelector((state) => state.ship.ships);
  const dispatch = useDispatch();

  const handleAddShip = (e) => {
    e.preventDefault();
    //const newShip = { name: name, lat: lat, lon: lon };
    dispatch(addShip(values));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleShipDone = (id) => {
    dispatch(removeShip(id));
  };
  return (
    <div className="shipadd">
      <h1>Ship List</h1>
      <form className="App-form" onSubmit={handleAddShip}>
        name:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
        <br />
        latitude:
        <input
          type="number"
          name="lat"
          value={values.lat}
          onChange={handleInputChange}
        />
        <br />
        longitude:
        <input
          type="number"
          name="lon"
          value={values.lon}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">ADD SHIP</button>
      </form>
      <div className="Ships">
        {count > 0 && ships.map((ship) => <p>{ship.name}</p>)}
        {count === 0 && <p>No ships</p>}
      </div>
    </div>
  );
};
export default ShipComponent;
