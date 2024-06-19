import { useState } from "react";
import { useDispatch } from "react-redux";
import { addShip } from "../features/shiplist/shiplistSlice";

const initialValues = {
  name: "",
  lat: 0,
  lon: 0,
  course: 90,
  speed: 10,
  status: "Underway",
  time: 1100,
};

function NewShipComponent(props) {
    const [values, setValues] = useState(initialValues);
    const dispatch = useDispatch();

    const handleAddShip = (e) => {
        e.preventDefault();
        dispatch(addShip(values));
        props.toggle();
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
        ...values,
        [name]: value,
        });
    };
    return (
        <div className="addnewship">
        <h1>Add Ship</h1>
            <form className="App-form" onSubmit={handleAddShip}>
                Name:       <input  type="text"     name="name" value={values.name} onChange={handleInputChange} />
                <br />
                Latitude:   <input  type="number"   name="lat"  value={values.lat}  onChange={handleInputChange} />
                <br />
                Longitude:  <input  type="number"   name="lon"  value={values.lon}  onChange={handleInputChange} />
                <br />
                Course:     <input  type="number"   name="course"  value={values.course}  onChange={handleInputChange} />
                <br />
                Speed:      <input  type="number"   name="speed"  value={values.speed}  onChange={handleInputChange} />
                <br/>
                Status:     <input  type="text"     name="status" value={values.status} onChange={handleInputChange} />
                <br />
                Time:       <input  type="text"   name="course"  value={values.time}  onChange={handleInputChange} />
                <br />
                <br />
                <button type="submit">ADD SHIP</button>
                <button onClick={props.toggle}>Close</button>
            </form>
        
        </div>
    );
}

export default NewShipComponent
