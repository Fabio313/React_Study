import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from "react";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("matheus");

  const [redTitle, setTitle] = useState(true);

  return (
    <div className="App">
      {/* css global */}
      <h1>React com CSS</h1>
      {/* css de component */}
      <MyComponent />
      <p>Este paragrafo é do app.js</p>
      {/* inline css */}
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado inline
      </p>
      {/* css inline dinamico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        Css dinamico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        Css dinamico
      </h2>
      <h2
        style={
          name === "matheus"
            ? { backgroundColor: "black", color: "white" }
            : null
        }
      >
        Css dinamico
      </h2>
      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo possui classe dinamica
      </h2>
      <button onClick={() => setTitle(!redTitle)}>
        Mudar variavel com State
      </button>
      {/* css modules */}
      <Title />
      <h2 className="my_title">CSS restringido apenas para o component</h2>
    </div>
  );
}

export default App;
