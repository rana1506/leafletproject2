import SelectedShipDropDownList from './SelectedShipDropDownList'
import NewShipPopup from './addship/NewShipPopup';
import DeleteShipPopup from './deleteship/DeleteShipPopup';
import EditShipPopup from './editship/EditShipPopup';
import AddPcsPopup from './addpcs/AddPcsPopup'
import ViewPcsPopup from './viewPcs/ViewPcsPopup';
import logo from '../img/logo.svg';
import { useState } from 'react';

function Header() { 
  const [activeMenu, setActiveMenu] = useState(0);

  function updateActivrMenu(n){
    setActiveMenu(n)
  }

  return (
    <div className="header">
      <div>
        <img src={logo} className="App-logo" alt=''/>
      </div> 
      <SelectedShipDropDownList activeMenu={activeMenu}/>  
      <NewShipPopup activeMenu={activeMenu} updateActivrMenu={updateActivrMenu}/>     
      <EditShipPopup activeMenu={activeMenu} updateActivrMenu={updateActivrMenu}/>
      <ViewPcsPopup activeMenu={activeMenu} updateActivrMenu={updateActivrMenu}/>
      <AddPcsPopup activeMenu={activeMenu} updateActivrMenu={updateActivrMenu}/>
      <DeleteShipPopup activeMenu={activeMenu} updateActivrMenu={updateActivrMenu}/>
  
    </div> 
  )
}

export default Header
