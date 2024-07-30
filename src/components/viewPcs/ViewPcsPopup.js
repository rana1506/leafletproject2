import React,{ useState } from 'react'
import ViewPcsComponent from './ViewPcsComponent';
function ViewPcsPopup(props) {
    const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
        !seen? props.updateActivrMenu(4):props.updateActivrMenu(0)
    };

    return (
        <div>
            { (props.activeMenu===4 || props.activeMenu===0)?
                <button onClick={togglePop}>View PCS</button>
                :
                <button disabled onClick={togglePop}>View PCS</button>
            }
            {seen ? <ViewPcsComponent toggle={togglePop} /> : null}
        </div>
    )
}

export default ViewPcsPopup
