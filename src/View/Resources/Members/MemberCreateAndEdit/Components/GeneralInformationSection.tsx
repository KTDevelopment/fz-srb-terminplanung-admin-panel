import React, {Component} from 'react';
import {NumberInput, TextInput, ReferenceInput, ReferenceArrayInput, SelectInput, CheckboxGroupInput} from 'react-admin';
import {Box, Typography} from '@material-ui/core';
import {SideBySide} from "../../../_Common/Form/SideBySide";

type Props = {
    hideIdInput?: boolean;
}

export class GeneralInformationSection extends Component<Props> {
    render = () => {
        let {hideIdInput, ...rest} = this.props;

        return <Box flex={2} mr="1em">
            <Typography variant="h6">Allgemein</Typography>
            {hideIdInput ? null :
                <Box display="flex">
                    <TextInput style={{width: '100%'}} disabled source="memberId" {...rest}/>
                </Box>
            }
            <SideBySide>
                <TextInput style={{width: '100%'}} source="firstName" {...rest}/>
                <TextInput style={{width: '100%'}} source="lastName" {...rest}/>
            </SideBySide>
            <SideBySide>
                <TextInput style={{width: '100%'}} source="email" type="email" {...rest}/>
                <NumberInput style={{width: '100%'}} source="performanceCount" {...rest}/>
            </SideBySide>
            <Box display="flex">
                <ReferenceInput style={{width: '100%'}} label="Register" source="sectionId" reference="sections" {...rest}>
                    <SelectInput optionText="sectionName" />
                </ReferenceInput>
            </Box>
            <Box display="flex">
                <ReferenceArrayInput style={{width: '100%'}} label="Rollen" source="roleIds" reference="roles" {...rest}>
                    <CheckboxGroupInput optionText="roleName" />
                </ReferenceArrayInput>
            </Box>
            <Box mt="1em"/>
        </Box>;
    };
}

