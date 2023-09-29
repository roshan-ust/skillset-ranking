import React from "react";

export default class InputField extends React.Component {
    shouldComponentUpdate(nextProps) {
        // console.log("''''''''''''''''''''''''''''''");
        // console.log("Name: ", this.props.name);
        // console.log("current: ", this.props.value);
        // console.log("next: ", nextProps.value);
        // console.log(this.props.value !== nextProps.value);
        // console.log("''''''''''''''''''''''''''''''");
        return this.props.value !== nextProps.value;
    }

    render() {
        return (
            <>
                <label>{this.props.label}</label>
                <input title={this.props.name} type="text" name={this.props.name} value={this.props.value} onChange={this.props.handleChange} />
            </>
        )
    }
}