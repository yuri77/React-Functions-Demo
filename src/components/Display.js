import React from "react";

// The purpuse of this component is to visually display the state of its parent component(i.e. the component that imports and uses this function)

function Display(props) {
  return <div className="display">{props.value}</div>;
}

export default Display;
