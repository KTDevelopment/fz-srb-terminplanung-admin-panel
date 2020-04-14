import React from 'react';
import {
    BooleanField,
    Datagrid,
    DateField,
    NumberField,
    Pagination,
    ReferenceField,
    ReferenceManyField,
    Show,
    Tab,
    TabbedShowLayout,
    TextField
} from 'react-admin';
import {InternalTab} from "../_Common/InternalTab";
import {FullMemberNameTextField} from "../_Common/MemberFullName";
import {STATE__HAS_PARTICIPATED} from "../ParticipationStates/ParticipationStateResource";

export const EventShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Allgemein">
                <ReferenceField source="eventId" reference="events"><TextField source="id"/></ReferenceField>
                <TextField source="eventName"/>
                <DateField showTime source="startDate"/>
                <DateField showTime source="endDate"/>
                <TextField source="category"/>
                <TextField source="summary"/>
                <TextField source="description"/>
            </Tab>
            <Tab label="Wo" path="where">
                <TextField source="location"/>
                <TextField source="address"/>
                <NumberField source="postcode"/>
                <TextField source="town"/>
                <NumberField source="longitude"/>
                <NumberField source="latitude"/>
            </Tab>
            <Tab label="Wer" path="who">
                <TextField source="dress"/>
                <TextField source="participatingGroup"/>
                <BooleanField source="isPublic"/>
            </Tab>
            <Tab label="Teilgenommen haben" path="participations">
                <ReferenceManyField label="" perPage={25} pagination={<Pagination />} reference="participations" filter={{ stateId: STATE__HAS_PARTICIPATED }} target="eventId">
                    <Datagrid>
                        <ReferenceField source="memberId" reference="members" link="show">
                            <FullMemberNameTextField/>
                        </ReferenceField>
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
            <InternalTab/>
        </TabbedShowLayout>
    </Show>
);
