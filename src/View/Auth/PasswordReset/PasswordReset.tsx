import React, {Component} from "react";
import './PasswordReset.css';
import Form from "./Components/Form/Form";
import PasswordInput from "./Components/Input/PasswordInput";
import {parseQueryString} from "../../../Utils/Utils";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {resetPassword} from "../../../Provider/AuthProvider";

type State = {
    queryParameter: {
        account: string,
        password_reset_token: string
    }
}

class PasswordReset extends Component<any, State> {
    private readonly passwordInput: React.RefObject<PasswordInput>;
    private readonly passwordInputConfirm: React.RefObject<PasswordInput>;
    private readonly form: React.RefObject<Form>;

    constructor(props) {
        super(props);

        this.state = {
            queryParameter: parseQueryString(this.props.location.search),
        };

        this.passwordInput = React.createRef();
        this.passwordInputConfirm = React.createRef();
        this.form = React.createRef();
    }

    validatePasswordConformInput = () => {
        if (this.passwordInputConfirm.current!.getValue() !== this.passwordInput.current!.getValue() || this.passwordInputConfirm.current!.getValue() === '') {
            this.passwordInputConfirm.current!.setInvalid();
        }
    };

    handleSubmit = async () => {
        if (this.isPasswordFormValid()) {
            this.form.current!.showProgress();
            try {
                await resetPassword(
                    this.state.queryParameter.account,
                    this.state.queryParameter.password_reset_token,
                    this.passwordInput.current!.getValue()
                );
                this.form.current!.showSuccess();
            } catch (e) {
                this.form.current!.showError("Anfrage ist fehlgeschlagen!");
                this.form.current!.disable();
                this.passwordInput.current!.disable();
                this.passwordInputConfirm.current!.disable();
            }
        } else {
            this.passwordInput.current!.validatePassword();
            this.passwordInputConfirm.current!.validatePassword();
            this.validatePasswordConformInput();
        }
    };

    isPasswordFormValid() {
        return this.passwordInput.current!.getValue() === this.passwordInputConfirm.current!.getValue() && this.passwordInput.current!.getValue() !== '';
    };

    render() {
        return (
            <div className="PasswordReset-Content">
                <Card>
                    <CardContent>

                        <Form ref={this.form}
                              introText="Bitte gib dein neues Passwort (mindestens 8 Zeichen) ein und bestätige es."
                              onSubmit={this.handleSubmit}
                              successChipText="Passwort erfolgreich zurückgesetzt.">
                            <PasswordInput ref={this.passwordInput}
                                           inputName="password"
                                           placeholder="neues Passwort"
                                           errorText="Das Passwort muss mindestens 8 Zeichen lang sein."/>
                            <PasswordInput ref={this.passwordInputConfirm}
                                           inputName="passwordConfirm"
                                           placeholder="Passwort bestätigen"
                                           errorText="Passwörter stimmen nicht überein."
                                           onChange={this.validatePasswordConformInput}/>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default PasswordReset;

