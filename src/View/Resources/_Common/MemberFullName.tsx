import React from "react";
import {ChipField, TextField} from 'react-admin';

export const FullMemberNameChip = (props) => {
    let record = {fullName: props.record.firstName + ' ' + props.record.lastName};
    return <ChipField
        source="fullName"
        record={record}
    />;
};

export const FullMemberNameTextField = (props) => {
    let record = {fullName: props.record.firstName + ' ' + props.record.lastName};
    return <TextField
        source="fullName"
        record={record}
    />;
};

export const fullNameRender = choice => `${choice.firstName} ${choice.lastName}`;
