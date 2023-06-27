import React from 'react';



const Input = (props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input  {...props.input} />
    </div>
  );
};

export default Input;