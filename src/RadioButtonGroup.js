import Input from "./Input";

const RadioButtonGroup = (props) => {
  // When radio is clicked
  const handleRadioClick = (event) => {
    props.setRadio(event.target.value);
    console.log(event.target.value);
  };

  return (
    <fieldset>
      <div className={props.showBorder ? "border" : ""}>
        <label>
          <input
            type="radio"
            name="choice"
            value="all"
            defaultChecked
            onClick={handleRadioClick}
          />
          Merkitse enimmäismäärä osakkeita
          <br />
        </label>
        {(!props.hideInactive || (props.hideInactive && props.radio === "all")) && (<p>
          Enimmäismäärä on {props.maxStock} kpl. <br />
          Merkinnän jälkeen sinulla jää käyttämättä 0 merkintäoikeutta.
        </p>)}
      </div>

      <div className={props.showBorder ? "border" : ""}>
        <label>
          <input
            type="radio"
            name="choice"
            value="custom"
            onClick={handleRadioClick}
          />
          Syötä merkittävien osakkeiden määrä
          <br />
        </label>
        {(!props.hideInactive || (props.hideInactive && props.radio === "custom")) &&  (<><Input
          disabled={props.radio === "all" ? true : false}
          maxStock={props.maxStock}
          ratio={props.ratio[1]}
          setInput={props.setInput}
          radio={props.radio}
        />
        <p>
          Syötä määrä, joka on jaollinen luvulla {props.ratio[1]}. <br />
          Merkinnän jälkeen sinulla jää käyttämättä{" "}
          {(props.ratio[0] / props.ratio[1]) * (props.maxStock - props.input) + " "}
          merkintäoikeutta.
        </p></>)}
      </div>
    </fieldset>
  );
};

export default RadioButtonGroup;
