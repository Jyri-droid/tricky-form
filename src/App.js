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
  const [hideInactiveBorder, setHideInactiveBorder] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <h2>Participate in subscription right</h2>
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
            hideInactiveBorder={hideInactiveBorder}
          />
          <ul>
            <ListItem value={price}>Price per stock</ListItem>
            <ListItem
              highlight
              value={radio === "all" ? maxStock * price : input * price}
            >
              Total charge
            </ListItem>
          </ul>
        </form>
        <Toggle 
          id="hideInactive" 
          state={hideInactive} 
          setState={setHideInactive} 
          text="Hide inactive radio button content" 
        />
        <Toggle 
          id="showTile" 
          state={showBorder} 
          setState={setShowBorder} 
          text="Add radio button border" 
        />
        <Toggle 
          id="showActiveBorder" 
          state={hideInactiveBorder} 
          setState={setHideInactiveBorder} 
          text="Hide inactive radio button border"
          disabled={!showBorder && true}
        />
      </div>
    </div>
  );
}
