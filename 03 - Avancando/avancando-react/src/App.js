import "./App.css";
import { useState } from "react";

import City from "./assets/city.jpg";
import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import PropCardDetails from "./components/PropCardDetails";
import PropsShowUserName from "./components/PropsShowUserName";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  const name = "Fabio";

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Ford", color: "Azul", newCar: false, km: 14000 },
    { id: 3, brand: "VW", color: "Preto", newCar: true, km: 0 },
  ];

  const showMessage = () => {
    console.log("Evento do component pai");
  };

  const [message, setMessage] = useState("message");

  const messageHandle = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, name: "Jorge", age: 30, profession: "Engenheiro" },
    { id: 2, name: "Renato", age: 15, profession: "Motorista" },
    { id: 3, name: "Rafaela", age: 18, profession: "Eletricista" },
  ];

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
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <PropCardDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* Fragment (remove necessidade de um elemento pai)*/}
      <Fragment propFragment="Teste" />
      {/* prop children */}
      <Container>
        <p>Este é o conteudo </p>
      </Container>
      {/* function como prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={messageHandle} />

      {/* desafio revisao de sessão */}
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          age={user.age}
          profession={user.profession}
        />
      ))}
    </div>
  );
}

export default App;
