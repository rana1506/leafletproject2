import React,{ useState } from 'react'
import AddPcsComponent from './AddPcsComponent';
function AddPcsPopup() {
    const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };

    return (
        <div>
            <button onClick={togglePop}>Add PCS</button>
            {seen ? <AddPcsComponent toggle={togglePop} /> : null}
        </div>
    )
}

export default AddPcsPopup
