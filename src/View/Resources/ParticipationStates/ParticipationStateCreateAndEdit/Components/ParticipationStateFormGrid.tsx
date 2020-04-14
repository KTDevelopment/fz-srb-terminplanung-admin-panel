import React from 'react';
import {NumberInput, TextInput} from 'react-admin';
import {Box} from '@material-ui/core';

export const ParticipationStateFormGrid = props => {
    let {disableIdInput, ...rest} = props;

    return <Box flex={2} mr="1em">
        <Box display="flex">
            <NumberInput style={{width: '100%'}} disabled={disableIdInput} source="stateId" {...rest}/>
        </Box>
        <Box display="flex">
            <TextInput style={{width: '100%'}} source="stateName" {...rest}/>
        </Box>

        <Box mt="1em"/>
    </Box>;
};
