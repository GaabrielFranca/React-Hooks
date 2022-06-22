import React from "react";

const CheckBox = ({ options, value, setValue }) => {
  function handleValue({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(
        value.filter((itemValue) => {
          if (itemValue !== target.value) {
            console.log(itemValue);
            return itemValue;
          }
        })
      );
    }
  }

  return (
    <div>
      {options.map((option) => (
        <p key={option}>
          <label>
            <input
              onChange={handleValue}
              type="checkbox"
              value={option}
            ></input>
            {option}
          </label>
        </p>
      ))}
    </div>
  );
};

export default CheckBox;
