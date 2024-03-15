const TemplateExpressions = () => {
  const name = "Fabio";
  const data = {
    name: "Matheus",
    age: 31,
    cpf: "12345678911",
  };

  return (
    <div>
      <h1>Olá {data.name}</h1>
    </div>
  );
};

export default TemplateExpressions;
