import React from "react";
import {Datagrid, Filter, NumberField, ReferenceField, ReferenceInput, SelectInput, SimpleList, TextField, TextInput} from 'react-admin';
import {DataGridActions} from "../_Common/DataGridActions";
import {ResponsiveList} from "../_Common/ResponsiveList";

const MembersFilter = (props) => (
    <Filter {...props} variant={'outlined'}>
        <ReferenceInput label="Register" source="sectionId" reference="sections">
            <SelectInput optionText="sectionName" />
        </ReferenceInput>
        <TextInput source="firstName"/>
        <TextInput source="lastName"/>
        <TextInput source="email"  type="email"/>
    </Filter>
);

export const MembersList = props => {
    return (
        <ResponsiveList
            smallList={
                <SimpleList
                    primaryText={record => record.firstName + " " + record.lastName}
                    secondaryText={record => record.email}
                />
            }
            normalList={
                <Datagrid rowClick="show" key={"memberId"}>
                    <TextField source="memberId"/>
                    <TextField source="firstName"/>
                    <TextField source="lastName"/>
                    <TextField source="email"/>
                    <NumberField source="performanceCount"/>
                    <ReferenceField label="Register" source="sectionId" reference="sections" link="show">
                        <TextField source="sectionName" />
                    </ReferenceField>
                    <DataGridActions/>
                </Datagrid>
            }
            {...props}
            filters={<MembersFilter/>}
        />
    );
};
