export default function InputField(props) {
    return (
        <>
            <label>{props.label}</label>
            <input type="text" name={props.name} value={props.value} onChange={props.handleChange} />
        </>
    )
}