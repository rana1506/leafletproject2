import React,{ useState } from 'react'
import ViewPcsComponent from './ViewPcsComponent';
function ViewPcsPopup() {
    const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };

    return (
        <div>
            <button onClick={togglePop}>View PCS</button>
            {seen ? <ViewPcsComponent toggle={togglePop} /> : null}
        </div>
    )
}

export default ViewPcsPopup
