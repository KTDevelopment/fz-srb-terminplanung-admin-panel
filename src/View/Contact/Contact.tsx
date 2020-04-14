import {Component} from "react";
import React from "react";
import './Contact.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class Contact extends Component {

    render() {
        return (
            <div className={'Contact-Container'}>
                <Card>
                    <CardContent>
                        <h1>Kontakt</h1>
                        <p>Kevin Thürmann</p>
                        <p>kevin.thuermann@web.de</p>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
