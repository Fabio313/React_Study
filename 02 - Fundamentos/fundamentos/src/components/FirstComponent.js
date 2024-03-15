//Teste de comentario

import MyComponent from "./MyComponent";

const FirstComponent = () => {
  //Essa funcao faz XPTO
  return (
    <div>
      {/*Jsx comentario */}
      <h1>Meu Primeiro Componente</h1>
      <p className="paragrafo">Meu Texto</p>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
