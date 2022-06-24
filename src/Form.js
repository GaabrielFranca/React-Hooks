import React from "react";
import CheckBox from "./CheckBox";
import useInput from "./Hooks/useInput";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
const Form = () => {
  // /^([0-9]{3})[.]?([0-9]{3})[.]?([0-9]{3})[-]?([0-9]{2})$/
  const cep = useInput("cep");

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log("Enviar");
    } else {
      console.log("Nao enviar");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="CEP"
          id="cep"
          type="text"
          placeholder="00000-000"
          o
          {...cep}
        ></Input>

        <button>Enviar</button>
      </form>
    </>
  );
};
export default Form;
