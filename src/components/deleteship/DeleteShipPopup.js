import React,{ useState } from 'react'
import DeleteShipComponent from './DeleteShipComponent';
function DeleteShipPopup() {
    const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };

    return (
        <div>
            <button onClick={togglePop}>Delete Ship</button>
            {seen ? <DeleteShipComponent toggle={togglePop} /> : null}
        </div>
    )
}

export default DeleteShipPopup
