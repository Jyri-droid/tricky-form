import { useState } from "react";

const Input = (props) => {
  const [alert, setAlert] = useState(null);
  const handleInputChange = (event) => {
    if (event.target.value > props.maxStock) {
      setAlert("You have exceeded maximum amount");
      props.setInput(props.maxStock);
    } else if (event.target.value <= 0) {
      setAlert(`Minimum amount is ${props.ratio}`);
      props.setInput(0);
    } else if (Math.round(event.target.value / props.ratio) !== event.target.value / 5) {
      setAlert(`The amount must be dividable by ${props.ratio}`);
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
