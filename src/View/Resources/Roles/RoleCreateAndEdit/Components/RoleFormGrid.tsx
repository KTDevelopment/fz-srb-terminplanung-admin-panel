import React from 'react';
import {NumberInput, TextInput} from 'react-admin';
import {Box} from '@material-ui/core';

export const RoleFormGrid = props => {
    let {disableIdInput, ...rest} = props;

    return <Box flex={2} mr="1em">
        <Box display="flex">
            <NumberInput style={{width: '100%'}} disabled={disableIdInput} source="roleId" {...rest}/>
        </Box>
        <Box display="flex">
            <TextInput style={{width: '100%'}} source="roleName" {...rest}/>
        </Box>

        <Box mt="1em"/>
    </Box>;
};
