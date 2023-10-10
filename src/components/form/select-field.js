import React, { useState } from "react";

export default React.memo((props) => {
    const [localSkills, setLocalSkills] = useState([]);

    const handleSelection = (e) => {

    }

    return (
        <>
            <label className="form-label">{props.label}</label>
            <select name={props.name} className="form-select" onChange={props.handleChange}>
                {
                    props.skills.filter((skill) => !(props.value.includes(`${skill.name},`) || props.value.includes(`, ${skill.name}`) || props.value === skill.name))
                        .map(skill =>
                        (
                            <option key={skill.id} value={skill.name}>{skill.name}</option>
                        ))
                }
            </select>
            <div className="d-flex flex-row gap-3 mt-2">
                {
                    props.value.split(',').map(val => (
                        <div key={val} className="badge bg-primary position-relative" style={{ fontSize: '14px' }}>
                            {val}
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cursor-pointer">
                                x
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </div>
                    ))
                }

            </div>
        </>
    )
});