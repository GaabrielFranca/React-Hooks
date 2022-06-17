import React from "react";

const inputFields = [
  {
    id: "name",
    type: "text",
    label: "name",
  },

  {
    id: "email",
    type: "email",
    label: "email",
  },

  {
    id: "password",
    type: "password",
    label: "password",
  },

  {
    id: "telephone",
    type: "number",
    label: "telephone",
  },
];

const Form = () => {
  const [form, setForm] = React.useState(
    inputFields.reduce((acc, fild) => {
      return {
        ...acc,
        [fild.id]: "",
      };
    }, {})
  );
  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  }

  function handleClick(event) {
    event.preventDefault();
    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  return (
    <>
      <form onSubmit={handleClick}>
        {inputFields.map(({ id, type, label }) => (
          <div key={id}>
            <label htmlFor={id} name={label}>
              {label}
            </label>
            <input id={id} type={type} onChange={handleChange} />
          </div>
        ))}
        {response && response.ok && <p>form sent</p>}
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
