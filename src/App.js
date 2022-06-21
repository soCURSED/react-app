import "./App.css";
import Cats from "./Cats";
import CatsT from "./title";
function App() {
  return (
    <div className="App">
      <div className="container">
        <CatsT titles={"Cat Store"} />
        <div className="cat1">
          <Cats
            catsPics={
              "https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg"
            }
            Name={"Max"}
            Age={"9 months"}
          />
        </div>
        <div className="cat2">
          <Cats
            className="cat2"
            catsPics={
              "https://media.newyorker.com/photos/590971712179605b11ad7a88/4:3/w_1787,h_1340,c_limit/Jabr-AreCatsDomesticated.jpg"
            }
            Name={"Luna"}
            Age={"4 yeas"}
          />
        </div>
        <div className="cat3">
          <Cats
            catsPics={
              "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fe09fec60-d77b-11ec-8585-951ab3afb4d2.jpg?crop=3132%2C1762%2C1419%2C223&resize=1200"
            }
            Name={"Jenefer"}
            Age={"2 years"}
          />
        </div>
        <div className="cat4">
          <Cats
            catsPics={"https://especiallycats.com/media/84c-Cat17.jpg"}
            Name={"You have to provide a name"}
            Age={"4 years"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
