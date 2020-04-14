import React, {Component} from 'react';
import {DateTimeInput, NumberInput, TextInput} from 'react-admin';
import {Box, Typography} from '@material-ui/core';
import {SideBySide} from "../../../_Common/Form/SideBySide";

type Props = {
    hideEventId?: boolean;
}

export class GeneralEventInfoFormSection extends Component<Props> {
    render = () => {
        let {hideEventId, ...rest} = this.props;

        return <Box flex={2} mr="1em">
            <Typography variant="h6">Allgemein</Typography>
            <SideBySide>
                {hideEventId ? <TextInput style={{width: '100%'}} source={'eventName'} {...rest}/> : <NumberInput style={{width: '100%'}} disabled source={'eventId'} {...rest}/>}
                {hideEventId ? null : <TextInput style={{width: '100%'}} source={'eventName'} {...rest}/>}
            </SideBySide>
            <SideBySide>
                <DateTimeInput style={{width: '100%'}} source={'startDate'} {...rest}/>
                <DateTimeInput style={{width: '100%'}} source={'endDate'} {...rest}/>
            </SideBySide>
            <Box display="flex">
                <TextInput style={{width: '100%'}} source="category" {...rest}/>
            </Box>
            <Box display="flex">
                <TextInput style={{width: '100%'}} multiline source={'summary'} {...rest}/>
            </Box>
            <Box display="flex">
                <TextInput style={{width: '100%'}} multiline source={'description'} {...rest}/>
            </Box>
            <Box mt="1em"/>
        </Box>;
    };
}
