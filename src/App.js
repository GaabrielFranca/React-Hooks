import React from "react";
import LocalStorege from "./LocalStorage";

const App = () => {
  const [produto, setProduto] = LocalStorege("produto", "");

  function handleClick({ target }) {
    return setProduto(target.innerText);
  }

  return (
    <>
      <h1>Preferido:{produto} </h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </>
  );
};

export default App;
