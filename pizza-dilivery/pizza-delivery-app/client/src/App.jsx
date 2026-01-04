import { useEffect, useState } from "react";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("/api/pizza")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pizza Dashboard</h1>

      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{pizza.name}</h3>
          <p>Base: {pizza.base}</p>
          <p>Price: ₹{pizza.price}</p>
          <button>Order</button>
        </div>
      ))}
    </div>
  );
}

export default App;
