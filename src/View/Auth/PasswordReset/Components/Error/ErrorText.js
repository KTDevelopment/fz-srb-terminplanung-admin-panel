import React from "react";
import {Component} from "react";
import './ErrorText.css';

class ErrorText extends Component {

    constructor(props) {
        super(props);

        this.errorText = React.createRef();
    }

    setVisible = () => {
        this.errorText.current.classList.add('ErrorText-visible')
    };

    setInVisible = () => {
        this.errorText.current.classList.remove('ErrorText-visible')
    };

    render() {
        return (
            <React.Fragment>
                <p ref={this.errorText} className="ErrorText">{this.props.errorText}</p>
            </React.Fragment>
        );
    }

}

export default ErrorText;