const ChangeMessageState = ({ handleMessage }) => {
  const messages = ["Boa noite", "Bom dia", "ola", "oi"];

  return (
    <div>
      {messages.map((message, i) => (
        <button onClick={() => handleMessage(message)} key={i}>
          mensage:{i}
        </button>
      ))}
    </div>
  );
};

export default ChangeMessageState;
