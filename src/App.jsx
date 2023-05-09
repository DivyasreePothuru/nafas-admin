
import './App.css';
import Dishes from "./data.json";


function App() {
  const infoDetail = (key) => {alert("You clicked dish ID " + key); };
  return (
    <div className="App">
      <div className='leftbar'>
        {Dishes && Dishes.map((dish) => {
              return (
                <div
                  key={dish.id}
                  className="card_container"
                  onClick={() => infoDetail(dish.id)}
                >
                  {/* images from URL */}
                  <img src={dish.URL} className="card_image" alt="dish" />
                  {/* text on overlay banner */}
                  <div className="card_overlay">
                    {dish.name} <br />( {dish.category} )
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default App;
