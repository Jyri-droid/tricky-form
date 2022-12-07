import RadioButtonGroup from "./RadioButtonGroup";
import ListItem from "./ListItem";
import Toggle from "./Toggle";
import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const [maxStock, setMaxStock] = useState(100);
  const [price, setPrice] = useState(50);
  const [ratio, setRatio] = useState([6,5]);
  const [radio, setRadio] = useState("all");
  const [input, setInput] = useState(null);
  const [hideInactive, setHideInactive] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <h2>Osallistu antiin</h2>
        <form>
          <RadioButtonGroup
            radio={radio}
            setRadio={setRadio}
            maxStock={maxStock}
            ratio={ratio}
            input={input}
            setInput={setInput}
            hideInactive={hideInactive}
            showBorder={showBorder} 
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
        <Toggle 
          id="hideInactive" 
          state={hideInactive} 
          setState={setHideInactive} 
          text="Piilota epäaktiivisten radio-painikkeiden sisältö" 
        />
        <Toggle 
          id="showTile" 
          state={showBorder} 
          setState={setShowBorder} 
          text="Näytä radio-painikkeiden ääriviiva" 
        />
      </div>
    </div>
  );
}
