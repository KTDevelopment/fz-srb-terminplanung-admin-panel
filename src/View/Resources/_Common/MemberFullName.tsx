import React from "react";
import {ChipField, TextField} from 'react-admin';

export const FullMemberNameChip = (props) => {
    let record = {fullName: fullNameRender(props.record), id: props.record.id};
    return <ChipField
        source="fullName"
        record={record}
    />;
};

export const FullMemberNameTextField = (props) => {
    let record = {fullName: fullNameRender(props.record), id: props.record.id};
    return <TextField
        source="fullName"
        record={record}
    />;
};

export const fullNameRender = choice => `${choice.firstName} ${choice.lastName}`;
