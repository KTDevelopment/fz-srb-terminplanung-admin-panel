import React from 'react';
import {NumberField, ReferenceField, Show, Tab, TabbedShowLayout, TextField} from 'react-admin';
import {InternalTab} from "../_Common/InternalTab";
import {FullMemberNameTextField} from "../_Common/MemberFullName";

export const ParticipationShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Allgemein">
                <ReferenceField source="id" reference="participations">
                    <NumberField source="id"/>
                </ReferenceField>
                <ReferenceField source="memberId" reference="members" link="show">
                    <FullMemberNameTextField/>
                </ReferenceField>
                <ReferenceField source="eventId" reference="events" link="show">
                    <TextField source="eventName"/>
                </ReferenceField>
                <ReferenceField source="stateId" reference="participation-states" link="show">
                    <TextField source="stateName"/>
                </ReferenceField>
            </Tab>
            <InternalTab/>
        </TabbedShowLayout>
    </Show>
);
