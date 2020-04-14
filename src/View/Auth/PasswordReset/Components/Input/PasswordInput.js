import React from "react";
import {Component} from "react";
import Input from "./Input";

class PasswordInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: this.props.showPassword ? 'text' : 'password'
        };

        this.input = React.createRef();
    }

    handleChange = (event) => {
        if (this.props.onChange) {
            this.props.onChange(event);
        }
        if (!this.props.disableAutoValidation) {
            this.validatePassword();
        }
    };

    getValue() {
        return this.input.current.getValue();
    }

    validatePassword = () => {
        let isValid = this.getValue().length >= 8;
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
                       type={this.state.type}
                       inputName={this.props.inputName}
                       placeholder={this.props.placeholder}
                       errorText={this.props.errorText}
                       onChange={this.handleChange}/>
            </React.Fragment>
        );
    }

}

export default PasswordInput;
