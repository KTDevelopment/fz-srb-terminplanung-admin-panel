import React from "react";
import {Component} from "react";
import './Form.css';
import Button from "../Button/Button";
import LoadingIcon from '@material-ui/icons/Refresh';
import Check from '@material-ui/icons/Check';

class Form extends Component {

    constructor(props) {
        super(props);

        this.errorLabel = React.createRef();
        this.form = React.createRef();
        this.submitButton = React.createRef();
        this.intro = React.createRef();
        this.successChip = React.createRef();

        this.state = {
            errorText: '',
            hasSuccessChip: !!this.props.successChipText,
            hasIntro: !!this.props.introText,
            submitButtonLabel: this.props.submitButtonLabel ? this.props.submitButtonLabel : 'Abschicken'
        };
    }

    componentDidMount() {
        this.loadingIcon = document.getElementById('loadingIcon');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.props.onSubmit) {
            this.props.onSubmit(event);
        }
    };

    showProgress() {
        this.form.current.classList.add('Form-progress');
        this.loadingIcon.classList.remove('hidden');
    }

    hideProgress() {
        this.form.current.classList.remove('Form-progress');
        this.loadingIcon.classList.add('hidden');
    }

    showError = (errorText) => {
        this.hideProgress();
        this.errorLabel.current.classList.remove('hidden');
        this.setState({errorText: errorText});
    };

    showSuccess = () => {
        this.hideProgress();
        if (this.state.hasSuccessChip) {
            this.form.current.classList.add('hidden');
            this.errorLabel.current.classList.add('hidden');
            this.successChip.current.classList.remove('hidden');
        }

        if (this.state.hasIntro) {
            this.intro.current.classList.add('hidden');
        }
    };

    disable = () => {
        this.submitButton.current.disable();
    };

    reset = () => {
        for (const child of this.props.children) {
            if (child.ref && child.ref.current && child.ref.current.reset) {
                child.ref.current.reset();
            }
        }
    };

    resetStates = () => {
        for (const child of this.props.children) {
            if (child.ref && child.ref.current && child.ref.current.resetState) {
                child.ref.current.resetState();
            }
        }
    };

    render() {
        const successChip = this.props.successChipText ? (
            <div ref={this.successChip} className="Form-success-chip hidden">
                <span><Check className="Form-success-chip-check"/></span>
                <span>{this.props.successChipText}</span>
            </div>
        ) : ('');

        const intro = this.props.introText ? (
            <div ref={this.intro} className="Form-intro-text">{this.props.introText}</div>
        ) : ('');


        return (
            <div className="Form-wrapper">
                <LoadingIcon id="loadingIcon" className="Form-loading-icon hidden"/>
                {intro}
                <form ref={this.form}
                      className="Form"
                      onSubmit={this.handleSubmit}>
                    {this.props.children}
                    <Button ref={this.submitButton} label={this.state.submitButtonLabel} type="submit"
                            className="Form-submit-button Button-primary"/>
                </form>
                <p ref={this.errorLabel} className="Form-error-label hidden">{this.state.errorText}</p>
                {successChip}
            </div>
        );
    }

}

export default Form;
