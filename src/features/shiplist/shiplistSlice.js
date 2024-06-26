import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 5,
  ships: [
    {
      id: "1",
      name: "MADHUMATI",
      estimated_position:[21, 89],
      pcs:[
        {
          id:1,
          geocode: [21, 89],
          course: 0,
          speed: 6000,
          status: "Underway",
          time: 1100,
        },
        {
          id:2,
          geocode: [21.7, 89.7],
          course: 135,
          speed: 6000,
          status: "Underway",
          time: 1400,
        },
      ]
    },
    {
      id: "2",
      name: "DURJOY",
      estimated_position:[21.5, 91.5],
      pcs:[
        {
          id:1,
          geocode: [21.5, 91.5],
          course: 120,
          speed: 1500,
          status: "Underway",
          time: 1100,
        },
      ]
    },
    {
      id: "3",
      name: "SAGOR",
      estimated_position:[22.0, 92.0],
      pcs:[
        {
          id:1,
          geocode: [22.0, 92.0],
          course: 150,
          speed: 2000,
          status: "Underway",
          time: 1100,
        },
      ]
    },
    {
      id: "4",
      name: "NIRMUL",
      estimated_position:[20.50, 90.50],      
      pcs:[
        {
          id:1,
          geocode: [20.50, 90.50],
          course: 180,
          speed: 2500,
          status: "Underway",
          time: 1100,
        },
      ]
    },
    {
      id: "5",
      name: "SHAPLA",
      estimated_position:[20.0, 89.0],
      pcs:[
        {
          id:1,
          geocode: [20.0, 89.0],
          course: 220,
          speed: 3000,
          status: "Underway",
          time: 1100,
        },
      ]
    },
  ],
  selectedShipId:"1",
  selectedShipName:"MADHUMATI",
};

export const shiplistSlice = createSlice({
  name: "shiplist",
  initialState,
  reducers: {
    addShip: (state, action) => {
      const ship = {
        id: (Math.random() * 100).toString(),
        name: action.payload.name,
        estimated_position: [action.payload.lat, action.payload.lon],
        pcs:[
          {
            id: (Math.random() * 100).toString(),
            geocode: [action.payload.lat, action.payload.lon],        
            course: action.payload.course,
            speed: action.payload.speed,
            status: action.payload.status,
            time: action.payload.time,
          }
        ]
      };
      state.ships.push(ship);
      state.count += 1;
    },
    removeShip: (state, action) => {
      state.ships = state.ships.filter((ship) => ship.id !== action.payload);
      state.count -= 1;
      state.selectedShipId=state.ships[0].id;
      state.selectedShipName=state.ships[0].name;
    },
    changeSelectedShip:(state, action)=>{
      state.selectedShipId=action.payload;
      state.selectedShipName=state.ships.find(ship=>{return(ship.id===state.selectedShipId)}).name
    },
    editShipPosition:(state, action)=>{console.log(action.payload)  
      const index = state.ships.findIndex(obj => { return obj.id === action.payload.id; });
      //const pcsIndex= state.ships[index].pcs.length-1    
      //state.ships[index].pcs[pcsIndex].geocode = action.payload.geocode  
      state.ships[index].estimated_position = action.payload.geocode    
    },
    addPCS:(state, action)=>{console.log(action.payload)  
      const index = state.ships.findIndex(obj => { return obj.id === action.payload.id; });
      const new_pcs={        
          id: (Math.random() * 100).toString(),
          geocode: [action.payload.lat, action.payload.lon],        
          course: action.payload.course,
          speed: action.payload.speed,
          status: action.payload.status,
          time: action.payload.time,        
      }
      state.ships[index].pcs.push(new_pcs);
    },
  },
});

export const { addShip, removeShip, changeSelectedShip, editShipPosition } = shiplistSlice.actions;

export default shiplistSlice.reducer;
