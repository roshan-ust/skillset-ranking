import {useState} from "react";

export default function InputField(props){
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) =>{
        setInputValue(event.target.value);
    };

    return(
        <>
        <label>{props.label}</label>
        <input type="text" value={inputValue} onChange={handleChange}/>
        </>
    )
}