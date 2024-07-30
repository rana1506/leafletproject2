import { useSelector} from "react-redux";
//import LeafletComponent from "./components/leafletmap/LeafletComponent";
import LeafletComponent from "./components/leafletmap/LeafletComponent1";
import "./styles.css";
import Box2 from "./components/Box2";
import Header from "./components/Header";
import GameLoop from "./components/GameLoop";
import Footer from "./components/footer";
//import ForExercise from "./components/ForExercise";
export default function App() {
  
  return (
    <div className="App">   
      <GameLoop/>  
      {/*<ForExercise/>*/}        
      {<Header/>}
      <div className="body">
        <LeafletComponent />
        <div className="box2">
          {<Box2/>}
        </div>
      </div> 
      {<Footer/>}  
    </div>
  );

}
