import React,{ useState } from 'react'
import NewShipComponent from './NewShipComponent';
function NewShipPopup() {
    const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };

    return (
        <div>
            <button onClick={togglePop}>Add New Ship</button>
            {seen ? <NewShipComponent toggle={togglePop} /> : null}
        </div>
    )
}

export default NewShipPopup
