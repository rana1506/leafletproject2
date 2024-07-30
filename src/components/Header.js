import SelectedShipDropDownList from './SelectedShipDropDownList'
import NewShipPopup from './addship/NewShipPopup';
import DeleteShipPopup from './deleteship/DeleteShipPopup';
import EditShipPopup from './editship/EditShipPopup';
import AddPcsPopup from './addpcs/AddPcsPopup'
import ViewPcsPopup from './viewPcs/ViewPcsPopup';
import { useState } from 'react';

function Header() { 
  const [activeMenu, setActiveMenu] = useState(0);

  function updateActivrMenu(n){
    setActiveMenu(n)
  }

  return (
    <div className="header">
      <div>
        LOGO
      </div>      
      <NewShipPopup activeMenu={activeMenu} updateActivrMenu={updateActivrMenu}/>   
      <SelectedShipDropDownList />      
      <EditShipPopup activeMenu={activeMenu} updateActivrMenu={updateActivrMenu}/>
      <ViewPcsPopup activeMenu={activeMenu} updateActivrMenu={updateActivrMenu}/>
      <AddPcsPopup activeMenu={activeMenu} updateActivrMenu={updateActivrMenu}/>
      <DeleteShipPopup activeMenu={activeMenu} updateActivrMenu={updateActivrMenu}/>
  
    </div> 
  )
}

export default Header
