import React from "react";
import {SimpleForm} from 'react-admin';

export const BasicForm = props => (
    <SimpleForm {...props} variant={'outlined'} margin="normal" redirect="list"/>
);
