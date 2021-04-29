import React from "react";
import "./Homepages/mainhomepage.css"

function TextInput(props) {
  return (
      <div>
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input 
        name={props.name}
        type="text"
        className="form-control"
        style={{backgroundColor:"transparent", color:"white"}}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TextInput;
