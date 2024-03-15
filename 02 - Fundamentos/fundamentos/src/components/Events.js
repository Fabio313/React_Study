const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o evento");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderiza isso</h1>;
    } else {
      return <h1>Ou isso</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Metodo</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou")}>Arrow function</button>
        <button
          onClick={() => {
            if (true) {
              console.log("Isso nao deveria existir");
            }
          }}
        >
          Arrow function complexa
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
