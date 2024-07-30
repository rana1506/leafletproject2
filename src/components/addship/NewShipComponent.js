import { useState } from "react";
import { useDispatch } from "react-redux";
import { addShip } from "../../features/shiplist/shiplistSlice";

const initialValues = {
  name: "",
  type: "",
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
        if(values.status==="Anchored")
            values.speed=0
        dispatch(addShip(values));
        props.toggle();
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values,[name]: value,});
    };
    return (
        <div className="popup">
            <h3>Add Ship</h3>
            <form className="App-form" onSubmit={handleAddShip}>
                <div className='inputfield'>
                    <p>Name:</p> 
                    <input  type="text"     name="name" value={values.name} onChange={handleInputChange} />
                </div>
                <div className='inputfield'>
                    <p>Type:</p> 
                    <input  type="text"     name="type" value={values.type} onChange={handleInputChange} />
                </div>   
                <div className='inputfield'>
                    <p>Latitude:</p> 
                    <input  type="number"   name="lat"  value={values.lat}  onChange={handleInputChange} />
                </div> 
                <div className='inputfield'>
                    <p>Longitude:</p> 
                    <input  type="number"   name="lon"  value={values.lon}  onChange={handleInputChange} />
                </div> 
                <div className='inputfield'>
                    <p>Course:</p> 
                    <input  type="number"   name="course"  value={values.course}  onChange={handleInputChange} />
                </div>
                <div className='inputfield'>
                    <p>Speed:</p> 
                    <input  type="number"   name="speed"  value={values.speed}  onChange={handleInputChange} />
                </div>
                <div className='inputfield'>
                    <p>Status:</p> 
                    <select name="status" value={values.status} onChange={handleInputChange}>                                
                        <option value="Anchored" >Anchored</option>
                        <option value="Underway"> Underway</option>
                    </select>
                </div>
                <div className='inputfield'>
                        <p>Time:</p> 
                        <input  type="text"   name="time"  value={values.time}  onChange={handleInputChange} />
                    </div>                
                <br />
                <div className='inputfield'>
                    <button type="submit">ADD SHIP</button>
                    <button onClick={props.toggle}>Close</button>
                </div>
            </form>        
        </div>
    );
}

export default NewShipComponent
