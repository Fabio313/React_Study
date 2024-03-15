import { useState } from "react";

const ManageData = () => {
  let somaData = 10;
  const [number, setNumber] = useState(10);

  console.log(somaData);
  console.log(number);

  return (
    <div>
      <div>
        <p>Valor: {somaData}</p>
        <button onClick={() => (somaData = 15)}>Mudar variavel</button>
      </div>
      <div>
        <p>Valor state: {number}</p>
        <button onClick={() => setNumber(15)}>Mudar variavel com State</button>
      </div>
    </div>
  );
};

export default ManageData;
