const Toggle = (props) => {
    const handleToggleChange = () => {
        props.state ? props.setState(false) : props.setState(true);
    };
    return <div className="toggle">
    <input type="checkbox" id={props.id} onClick={handleToggleChange} disabled={props.disabled}/>
    <label htmlFor={props.id}>{props.text}</label>
  </div>
}

export default Toggle;