import { useSelector} from "react-redux";
//import LeafletComponent from "./components/LeafletComponent";
import LeafletComponent from "./components/LeafletComponent1";
import "./styles.css";
import Box2 from "./components/Box2";
import Header from "./components/Header";
import GameLoop from "./components/GameLoop";
import ForExercise from "./components/ForExercise";
export default function App() {
  const selectedShipId = useSelector((state) => state.ship.selectedShipId);
  const selectedShipName = useSelector((state) => state.ship.selectedShipName);
  return (
    <div className="App">   
    <GameLoop/>  
    {/*<ForExercise/>*/}   
    <p>Selected Item: {selectedShipId}:{selectedShipName}</p>       
      {/*<Header/>*/}
      <div className="box1">
        <LeafletComponent />
        <div className="box2">
          {/*<Box2/>*/}
        </div>
      </div>   
    </div>
  );

}
