import React from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";

const App = () => {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) return <h2 style={{ color: "white" }}>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

  return (
    <div className="app">
      <h1>Photos</h1>
      <div className="grid">
        {data.slice(0, 20).map((item) => (
          <div className="card" key={item.id}>
            <img src={item.images[0]} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
