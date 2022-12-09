import Input from "./Input";

const RadioButtonGroup = (props) => {
  // When radio is clicked
  const handleRadioClick = (event) => {
    props.setRadio(event.target.value);
    console.log(event.target.value);
  };

  return (
    <fieldset>
      <div 
        className={props.showBorder 
        ? ((props.hideInactiveBorder && props.radio === "custom") 
        ? "border transparent" : "border" ) 
        : ""}
      >
        <label>
          <input
            type="radio"
            name="choice"
            value="all"
            defaultChecked
            onClick={handleRadioClick}
          />
          Subscribe maximum account of stock
          <br />
        </label>
        {(!props.hideInactive || (props.hideInactive && props.radio === "all")) && (<p>
          Maximum amount of stock is {props.maxStock}. <br />
          After the subscription you will have 0 subscription rights left.
        </p>)}
      </div>

      <div 
        className={props.showBorder 
        ? ((props.hideInactiveBorder && props.radio === "all") 
        ? "border transparent" : "border" ) 
        : ""}
      >
        <label>
          <input
            type="radio"
            name="choice"
            value="custom"
            onClick={handleRadioClick}
          />
          Enter amount of stock
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
          Enter amount that is dividable by {props.ratio[1]}. <br />
          After the subscription you will have{" "}
          {(props.ratio[0] / props.ratio[1]) * (props.maxStock - props.input) + " "}
          subscription right left.
        </p></>)}
      </div>
    </fieldset>
  );
};

export default RadioButtonGroup;
