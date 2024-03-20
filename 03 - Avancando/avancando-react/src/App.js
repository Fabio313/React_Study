import "./App.css";

import City from "./assets/city.jpg";
import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import PropCardDetails from "./components/PropCardDetails";
import PropsShowUserName from "./components/PropsShowUserName";

function App() {
  const name = "Fabio";
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem em asset*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      <PropsShowUserName name={name} />
      {/* destructuring props */}
      <PropCardDetails brand="VW" km={10000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <PropCardDetails brand="Ford" color="red" km={0} newCar={true} />
      <PropCardDetails brand="Fiat" color="branco" km={4500} newCar={false} />
    </div>
  );
}

export default App;
