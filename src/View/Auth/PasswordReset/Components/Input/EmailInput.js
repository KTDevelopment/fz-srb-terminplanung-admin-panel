import React from "react";
import {Component} from "react";
import Input from "./Input";

class EmailInput extends Component {

    constructor(props) {
        super(props);

        this.input = React.createRef();
    }

    handleChange = (event) => {
        if (this.props.onChange) {
            this.props.onChange(event);
        }
        if (!this.props.disableAutoValidation) {
            this.validateEmail();
        }
    };

    getValue() {
        return this.input.current.getValue();
    }

    setValue(value) {
        this.input.current.setValue(value);
    }

    validateEmail = () => {
        let regExp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
        let isValid = this.getValue().match(regExp);
        if (isValid) {
            this.setValid();
            return true;
        } else {
            this.setInvalid();
            return false;
        }
    };

    setInvalid = () => {
        this.input.current.setInvalid();
    };

    setValid = () => {
        this.input.current.setValid();
    };

    resetState = () => {
        this.input.current.resetState();
    };

    reset = () => {
        this.input.current.reset();
    };

    disable = () => {
        this.input.current.disable();
    };

    render() {
        return (
            <React.Fragment>
                <Input ref={this.input}
                       type="email"
                       inputName={this.props.inputName}
                       placeholder={this.props.placeholder}
                       errorText={this.props.errorText}
                       onChange={this.handleChange}/>
            </React.Fragment>
        );
    }

}

export default EmailInput;
