import React from "react";
import {Component} from "react";
import './Button.css';

class Button extends Component {

    constructor(props) {
        super(props);

        this.button = React.createRef();

        this.state = {
            className: this.props.className ? this.props.className : ''
        }
    }

    onClick = (event) => {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    };

    disable = () => {
        this.button.current.disabled = true;
    };

    render() {
        return (
            <React.Fragment>
                <button ref={this.button}
                        className={"Button " + this.state.className}
                        onClick={this.onClick}
                        type={this.props.type}>
                    <span className="Button-label">{this.props.label}</span>
                </button>
            </React.Fragment>
        );
    }

}

export default Button;
