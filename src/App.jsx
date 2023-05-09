import "./App.css";
import Inputpage from "./Inputpage";
import Dishes from "./data.json";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();

function App() {
  const navigate = useNavigate();
  function inputHandler() {
    <button>Edit</button>
    
    navigate("/inputpage");
  }

  const infoDetail = (key) => {
    // alert("You clicked dish ID " + key);
    // <Inputpage />;
  };
  return (
    <div className="App">
      <AppContext.Provider value={{}}>
        <Routes>
          {/* <Route path="/inputpage" element={<Inputpage/>} /> */}
        </Routes>
      </AppContext.Provider>

      <div className="leftbar">
        {Dishes &&
          Dishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="card_container"
                onClick={() => infoDetail(dish.id)}
              >
                {/* images from URL */}
                <img onClick={inputHandler} src={dish.URL} className="card_image" alt="dish" />
                {/* text on overlay banner */}
                <div className="card_overlay">
                  {dish.name} <br />( {dish.category} )
                </div>
              </div>
            );
          })}
      </div>

      <input type="text" />
    </div>
  );
}

export default App;
