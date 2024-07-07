import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

function ViewPcsComponent(props) {   
    const selectedShipId = useSelector((state) => state.ship.selectedShipId)
    const item = useSelector((state) => state.ship.ships).find(ship=>{return(ship.id===selectedShipId)}) 
    const data=item.pcs
    
    return (
        <div className="addnewship"> 
            <table>
                <tr>
                    <th>ID</th>
                    <th>Time</th>
                    <th>Position</th>
                    <th>Course</th>                    
                    <th>Speed</th>                   
                    <th>Status</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key} onClick={}>
                            <td>{val.id}</td>
                            <td>{val.time}</td>
                            <td>{val.geocode}</td>
                            <td>{val.course}</td>
                            <td>{val.speed}</td>
                            <td>{val.status}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default ViewPcsComponent
