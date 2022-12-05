const ListItem = (props) => {
  return (
    <li>
      <p>{props.children}</p>
      <br />
      {props.highlight ? <h3>{props.value} €</h3> : <h4>{props.value} €</h4>}
    </li>
  );
};

export default ListItem;
