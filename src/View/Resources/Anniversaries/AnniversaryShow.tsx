import React from 'react';
import {NumberField, ReferenceField, Show, Tab, TabbedShowLayout, TextField} from 'react-admin';
import {InternalTab} from "../_Common/InternalTab";
import {FullMemberNameTextField} from "../_Common/MemberFullName";

export const AnniversaryShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Allgemein">
                <ReferenceField source="anniversaryId" reference="anniversaries">
                    <NumberField source="anniversaryId"/>
                </ReferenceField>
                <TextField source="performanceCount"/>
                <ReferenceField source="eventId" reference="events" link="show">
                    <TextField source="eventName"/>
                </ReferenceField>
                <ReferenceField source="memberId" reference="members" link="show">
                    <FullMemberNameTextField/>
                </ReferenceField>
            </Tab>
            <InternalTab/>
        </TabbedShowLayout>
    </Show>
);
