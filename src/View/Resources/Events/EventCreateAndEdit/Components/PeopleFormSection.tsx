import React, {Component} from "react";
import {BooleanInput, TextInput} from 'react-admin';
import {Box, Typography} from '@material-ui/core';
import {SideBySide} from "../../../_Common/Form/SideBySide";

export class PeopleFormSection extends Component {
    render = () => <Box flex={2} mr="1em">
        <Typography variant="h6">Wer</Typography>
        <SideBySide>
            <TextInput style={{width: '100%'}} source="participatingGroup" {...this.props}/>
            <TextInput style={{width: '100%'}} source="dress" {...this.props}/>
        </SideBySide>
        <BooleanInput source="isPublic" {...this.props}/>
        <Box mt="1em"/>
    </Box>;
}
