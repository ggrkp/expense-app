import "./Card.css";

// Reusable WRAPPER!!! - Imagine this happening for a modal. Much wow.
export default function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
