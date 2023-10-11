import React from "react";

export default React.memo((props) => (
    <div className="form-floating w-100">
        <input type="text" className="form-control" id={props.name} title={props.name} name={props.name} value={props.value} onChange={props.handleChange} />
        <label htmlFor={props.name}>{props.label}</label>
    </div>
), (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
});