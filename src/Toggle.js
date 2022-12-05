const Toggle = (props) => {
    const handleToggleChange = () => {
        props.toggle ? props.setToggle(false) : props.setToggle(true);
    };
    return <div className="toggle">
    <input type="checkbox" id="hideInactive" name="hideInactive"  onClick={handleToggleChange} />
    <label htmlFor="hideInactive">Piilota epäaktiivisten radio-painikkeiden sisältö</label>
  </div>
}

export default Toggle;