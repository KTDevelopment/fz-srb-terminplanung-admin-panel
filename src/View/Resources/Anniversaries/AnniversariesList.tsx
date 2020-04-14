import React from "react";
import {Datagrid, List, NumberField, ReferenceField, TextField} from 'react-admin';
import {DataGridActions} from "../_Common/DataGridActions";
import {FullMemberNameTextField} from "../_Common/MemberFullName";


export const AnniversariesList = props => {
    return (
        <List {...props}>
            <Datagrid rowClick="show" key={"anniversaryId"}>
                <NumberField source="anniversaryId"/>
                <NumberField source="performanceCount"/>
                <ReferenceField source="eventId" reference="events" link="show">
                    <TextField source="eventName"/>
                </ReferenceField>
                <ReferenceField source="memberId" reference="members" link="show">
                    <FullMemberNameTextField/>
                </ReferenceField>
                <DataGridActions/>
            </Datagrid>
        </List>
    );
};
