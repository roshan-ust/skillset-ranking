import React from "react";

export default React.memo((props) => (
    <>
        <label className="form-label">{props.label}</label>
        <input className="form-control" title={props.name} type="text" name={props.name} value={props.value} onChange={props.handleChange} />
    </>
), (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
});