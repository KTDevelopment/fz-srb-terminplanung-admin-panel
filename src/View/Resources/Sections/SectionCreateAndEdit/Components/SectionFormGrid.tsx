import React from 'react';
import {NumberInput, TextInput} from 'react-admin';
import {Box} from '@material-ui/core';

export const SectionFormGrid = props => {
    let {hideIdInput, ...rest} = props;

    return <Box flex={2} mr="1em">
        {hideIdInput ? null :
            <Box display="flex">
                <NumberInput style={{width: '100%'}} disabled source="sectionId" {...rest}/>
            </Box>
        }
        <Box display="flex">
            <TextInput style={{width: '100%'}} source="sectionName" {...rest}/>
        </Box>

        <Box mt="1em"/>
    </Box>;
};
