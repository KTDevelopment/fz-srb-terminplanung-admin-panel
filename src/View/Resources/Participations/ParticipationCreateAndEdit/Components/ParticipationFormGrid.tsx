import React from 'react';
import {NumberInput} from 'react-admin';
import {Box} from '@material-ui/core';
import {MemberAutoCompleteInput} from "./MemberAutoCompleteInput";
import {EventAutoCompleteInput} from "./EventAutoCompleteInput";
import {ParticipationStateAutocompleteInput} from "./ParticipationStateAutocompleteInput";

export const ParticipationFormGrid = props => {
    let {hideIdInput, ...rest} = props;

    return <Box flex={2} mr="1em">
        {hideIdInput ? null :
            <Box display="flex">
                <NumberInput style={{width: '100%'}} disabled source="id" {...rest}/>
            </Box>
        }
        <Box display="flex">
            <MemberAutoCompleteInput {...rest}/>
        </Box>
        <Box display="flex">
           <EventAutoCompleteInput {...rest}/>
        </Box>
        <Box display="flex">
            <ParticipationStateAutocompleteInput {...rest}/>
        </Box>

        <Box mt="1em"/>
    </Box>;
};
