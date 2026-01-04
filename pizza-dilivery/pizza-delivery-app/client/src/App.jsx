import { useEffect, useState } from "react";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [base, setBase] = useState("");
  const [sauce, setSauce] = useState("");
  const [cheese, setCheese] = useState("");

  const bases = ["Thin", "Cheese Burst"];
  const sauces = ["Tomato", "BBQ"];
  const cheeses = ["Mozzarella", "Cheddar"];

  useEffect(() => {
    fetch("http://localhost:5000/api/pizza")
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pizza Dashboard</h1>

      {pizzas.map((pizza, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "15px",
          }}
        >
          <h3>{pizza.name}</h3>
          <p>Price: ₹{pizza.price}</p>

          <select onChange={(e) => setBase(e.target.value)}>
            <option>Select Base</option>
            {bases.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>

          <br /><br />

          <select onChange={(e) => setSauce(e.target.value)}>
            <option>Select Sauce</option>
            {sauces.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <br /><br />

          <select onChange={(e) => setCheese(e.target.value)}>
            <option>Select Cheese</option>
            {cheeses.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <br /><br />

          <button
            onClick={() =>
              alert(
                `Ordered ${pizza.name}\nBase: ${base}\nSauce: ${sauce}\nCheese: ${cheese}`
              )
            }
          >
            Order Pizza
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
