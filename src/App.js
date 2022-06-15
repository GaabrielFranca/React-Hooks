import React from "react";
import useFetch from "./UseFetch";
const App = () => {
  const { request, dados, loading, error } = useFetch();

  React.useEffect(() => {
    request("https://jsonplaceholder.typicode.com/posts");
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (dados)
    return (
      <>
        <div>
          {dados.map(({ id, title }) => (
            <ul key={id}>
              <li key={id}>{title}</li>
            </ul>
          ))}
          ''
        </div>
      </>
    );
  else return null;
};

export default App;
