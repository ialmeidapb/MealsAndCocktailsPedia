import React from "react";
import "./Homepages/mainhomepage.css"

function TextInput(props) {
  return (
   <div>
      <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input 
        name={props.name}
        type="text"
        className="form-control"
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
   </div>
  );
}

export default TextInput;
