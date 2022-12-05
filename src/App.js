import RadioButtonGroup from "./RadioButtonGroup";
import ListItem from "./ListItem";
import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const [maxStock, setMaxStock] = useState(100);
  const [price, setPrice] = useState(50);
  const [radio, setRadio] = useState("all");
  const [input, setInput] = useState(null);
  return (
    <div className="App">
      <div className="container">
        <h2>Osallistu antiin</h2>
        <form>
          <RadioButtonGroup
            radio={radio}
            setRadio={setRadio}
            maxStock={maxStock}
            input={input}
            setInput={setInput}
          />
          <ul>
            <ListItem value={price}>Osakkeen hinta / kpl</ListItem>
            <ListItem
              highlight
              value={radio === "all" ? maxStock * price : input * price}
            >
              Merkintähinta yhteensä
            </ListItem>
          </ul>
        </form>
      </div>
    </div>
  );
}
