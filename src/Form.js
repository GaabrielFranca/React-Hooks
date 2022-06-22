import React from "react";
import CheckBox from "./CheckBox";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
const Form = () => {
  const [tec, setTec] = React.useState([]);
  return (
    <>
      <form>
        <CheckBox
          value={tec}
          setValue={setTec}
          options={["vue.js", "React.js", "Angular.js"]}
        ></CheckBox>
      </form>
    </>
  );
};
export default Form;
