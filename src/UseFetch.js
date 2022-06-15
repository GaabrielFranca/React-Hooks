import React from "react";

const useFetch = () => {
  const [dados, setDados] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(function request(url, option) {
    setError(null);
    setLoading(true);
    fetch(url)
      .then((dados) => dados.json())
      .then((json) => setDados(json))
      .catch(() => {
        setError("Error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { dados, error, loading, request };
};

export default useFetch;
