import React from 'react';
import {NumberInput, ReferenceInput, SelectInput} from 'react-admin';
import {Box} from '@material-ui/core';
import {SideBySide} from "../../../_Common/Form/SideBySide";
import {fullNameRender} from "../../../_Common/MemberFullName";

export const AnniversaryFormGrid = props => {
    let {hideIdInput, ...rest} = props;

    return <Box flex={2} mr="1em">
        {hideIdInput ? null :
            <Box display="flex">
                <NumberInput style={{width: '100%'}} disabled source="anniversaryId" {...rest}/>
            </Box>
        }
        <Box display="flex">
            <NumberInput style={{width: '100%'}} source="performanceCount" {...rest}/>
        </Box>
        <SideBySide>
            <ReferenceInput style={{width: '100%'}} source="memberId" reference="members" {...rest}>
                <SelectInput optionText={fullNameRender} />
            </ReferenceInput>
            <ReferenceInput style={{width: '100%'}} source="eventId" reference="events" {...rest}>
                <SelectInput optionText="eventName" />
            </ReferenceInput>
        </SideBySide>

        <Box mt="1em"/>
    </Box>;
};

