import React from "react";

const Input = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <p>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={id}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
          type={type}
          value={value}
        ></input>
      </p>
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
