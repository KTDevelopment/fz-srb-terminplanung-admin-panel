import React from "react";
import {Datagrid, DeleteButton, List, NumberField, ReferenceField, TextField} from 'react-admin';
import {FullMemberNameTextField} from "../_Common/MemberFullName";

export const ParticipationsList = props => {
    return (
        <List {...props}>
            <Datagrid rowClick="show" key={"id"}>
                <NumberField source="id"/>
                <ReferenceField source="memberId" reference="members" link="show">
                    <FullMemberNameTextField/>
                </ReferenceField>
                <ReferenceField source="eventId" reference="events" link="show">
                    <TextField source="eventName"/>
                </ReferenceField>
                <ReferenceField source="stateId" reference="participation-states" link="show">
                    <TextField source="stateName"/>
                </ReferenceField>
                <DeleteButton label=""/>
            </Datagrid>
        </List>
    );
};
