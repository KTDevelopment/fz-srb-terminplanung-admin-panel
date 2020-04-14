import React, {Component} from "react";
import {NumberInput, TextInput} from 'react-admin';
import {Box, Typography} from '@material-ui/core';
import {SideBySide} from "../../../_Common/Form/SideBySide";

export class LocationFormSection extends Component {
    render = () => <Box flex={2} mr="1em">
        <Typography variant="h6">Wo</Typography>
        <SideBySide>
            <TextInput style={{width: '100%'}} source="location" {...this.props}/>
            <TextInput style={{width: '100%'}} source="address" {...this.props}/>
        </SideBySide>
        <SideBySide>
            <NumberInput style={{width: '100%'}} source="postcode" {...this.props}/>
            <TextInput style={{width: '100%'}} source="town" {...this.props}/>
        </SideBySide>
        <SideBySide>
            <NumberInput style={{width: '100%'}} source="longitude" {...this.props}/>
            <NumberInput style={{width: '100%'}} source="latitude" {...this.props}/>
        </SideBySide>
        <Box mt="1em"/>
    </Box>;
}
