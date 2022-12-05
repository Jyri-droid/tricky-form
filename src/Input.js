import { useState } from "react";

const Input = (props) => {
  const [alert, setAlert] = useState(null);
  const handleInputChange = (event) => {
    if (event.target.value > props.maxStock) {
      setAlert("Enimmäismäärä on 100");
      props.setInput(props.maxStock);
    } else if (event.target.value <= 0) {
      setAlert("Vähimmäismäärä on 1");
      props.setInput(0);
    } else if (Math.round(event.target.value / 5) !== event.target.value / 5) {
      setAlert("Määrän pitää olla jaollinen luvulla 5");
      props.setInput(0);
    } else {
      setAlert(false);
      props.setInput(event.target.value);
    }
  };
  return (
    <div className="input-row">
      <input
        disabled={props.disabled}
        type="number"
        defaultValue="Syötä määrä"
        onBlur={handleInputChange}
      />
      <span className={props.disabled ? "unit strike-through" : "unit"}>
        KPL
      </span>
      {alert && props.radio !== "all" && !props.toggle && (
        <p>
          <span className="material-symbols-sharp">warning</span>
          {alert}
        </p>
      )}
    </div>
  );
};

export default Input;
