import React from "react";
import {DateField, NumberField, Tab} from 'react-admin';

export const InternalTab = props => {
    return <Tab label="Intern" path="internal" {...props}>
        <DateField showTime source="creationDate"/>
        <DateField showTime source="updateDate"/>
        <NumberField source="version"/>
    </Tab>
};
