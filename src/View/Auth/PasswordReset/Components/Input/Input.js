import React from "react";
import {Component} from "react";
import './Input.css';
import ErrorText from "../Error/ErrorText";

class Input extends Component {

    constructor(props) {
        super(props);

        this.errorText = React.createRef();
        this.input = React.createRef();
        this.label = React.createRef();
        this.wrapper = React.createRef();
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        if (this.props.onChange) {
            this.props.onChange(event);
        }
        this.setState({value: this.input.current.value});

    };

    setValue(value) {
        this.setState({value: value})
    }

    componentDidUpdate() {
        if (this.input.current.value !== '') {
            this.input.current.classList.add('Input-not-empty')
        } else {
            this.input.current.classList.remove('Input-not-empty')
        }
    }

    getValue() {
        return this.input.current.value
    }

    setInvalid = () => {
        this.input.current.classList.add("Input-invalid");
        this.input.current.classList.remove("Input-valid");
        this.errorText.current.setVisible();
    };

    setValid = () => {
        this.input.current.classList.remove("Input-invalid");
        this.input.current.classList.add("Input-valid");
        this.errorText.current.setInVisible();
    };

    reset = () => {
        this.resetState();
        this.setValue('')
    };

    resetState = () => {
        this.input.current.classList.remove("Input-valid");
        this.input.current.classList.remove("Input-invalid");
        this.errorText.current.setInVisible();
    };

    disable = () => {
        this.input.current.disabled = true;
    };

    hide = () => {
        this.input.current.classList.add("hidden");
        this.label.current.classList.add("hidden");
        this.wrapper.current.classList.add("hidden");
    };

    render() {
        return (
            <React.Fragment>
                <div ref={this.wrapper} className="Input-field">
                    <input ref={this.input}
                           className="Input"
                           type={this.props.type}
                           value={this.state.value}
                           onChange={this.handleChange}/>
                    <label ref={this.label} className="Input-field-placeholder">{this.props.placeholder}</label>
                    <ErrorText ref={this.errorText} errorText={this.props.errorText}/>
                </div>
            </React.Fragment>
        );
    }
}


export default Input;
