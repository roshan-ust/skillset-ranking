import React, { useState } from "react";
import * as Constants from '../../common/constants';

const SelectField = (props) => {
    const [selectedCount, setSelectedCount] = useState(0);

    const handleSelectionAddition = (e) => {
        const { name, value } = e.target;
        setSelectedCount((count) => ++count);
        value && props.handleChange(name, value, Constants.SELECT_ADD);
    }

    const handleSelectionDeletion = (value) => {
        setSelectedCount((count) => --count);
        props.handleChange(props.name, value, Constants.SELECT_DELETE);
    }

    return (
        <div className="select-input w-100">
            <div className="form-floating">
                <select disabled={selectedCount && selectedCount === props.skills.length} name={props.name} title={props.name}
                    className="form-select" onChange={handleSelectionAddition} id={props.name} aria-label={props.label}>
                    <option hidden={props.value} defaultValue={''} value=''>-- select --</option>
                    {
                        props.skills.filter((skill) => !(props.value.includes(`${skill.name},`) || props.value.includes(`, ${skill.name}`) || props.value === skill.name))
                            .map(skill =>
                            (
                                <option key={skill.id} value={skill.name}>{skill.name}</option>
                            ))
                    }
                </select>
                <label htmlFor={props.name} className="mb-2">{props.label}</label>
            </div>

            <div className="d-flex flex-row gap-3 mt-4 selected-values">
                {
                    props.value && props.value.split(',').map(val => {
                        val = val.trim();
                        return (
                            <div key={val} className="badge bg-info bg-gradient position-relative p-2 text-dark" style={{ fontSize: '14px', fontWeight: '400' }}>
                                {val}
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cursor-pointer"
                                    onClick={() => handleSelectionDeletion(val)}>
                                    x
                                </span>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default React.memo(SelectField, (prevProps, nextProps) => {
    return prevProps.value === nextProps.value && prevProps.skills.length === nextProps.skills.length;
});