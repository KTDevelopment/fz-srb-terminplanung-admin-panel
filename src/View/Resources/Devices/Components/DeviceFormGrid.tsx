import React from 'react';
import {ReferenceInput, SelectInput, TextInput} from 'react-admin';
import {Box} from '@material-ui/core';
import {fullNameRender} from "../../_Common/MemberFullName";

const deviceTypeChoices = [
    {id: 'type_ios', name: 'iOS'},
    {id: 'type_android', name: 'Android'},
];

export const DeviceFormGrid = props => {
    return <Box flex={2} mr="1em">
        <Box display="flex">
            <TextInput style={{width: '100%'}} source="registrationId" {...props}/>
        </Box>
        <ReferenceInput style={{width: '100%'}} source="memberId" reference="members" {...props}>
            <SelectInput optionText={fullNameRender}/>
        </ReferenceInput>
        <SelectInput choices={deviceTypeChoices} source="deviceType" />
        <Box mt="1em"/>
    </Box>;
};

