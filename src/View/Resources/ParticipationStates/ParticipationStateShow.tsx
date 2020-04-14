import React from 'react';
import {NumberField, ReferenceField, Show, Tab, TabbedShowLayout, TextField} from 'react-admin';
import {InternalTab} from "../_Common/InternalTab";

export const ParticipationStateShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Allgemein">
                <ReferenceField source="stateId" reference="participation-states">
                    <NumberField source="stateId"/>
                </ReferenceField>
                <TextField source="stateName"/>
            </Tab>
            <InternalTab/>
        </TabbedShowLayout>
    </Show>
);
