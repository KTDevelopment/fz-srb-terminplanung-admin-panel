import React from 'react';
import {NumberField, ReferenceField, Show, Tab, TabbedShowLayout, TextField} from 'react-admin';
import {InternalTab} from "../_Common/InternalTab";
import {FullMemberNameTextField} from "../_Common/MemberFullName";

export const DeviceShow = props => {

    return <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Allgemein">
                <ReferenceField source="deviceId" reference="devices">
                    <NumberField source="deviceId"/>
                </ReferenceField>
                <TextField source="registrationId"/>
                <TextField source="deviceType"/>
            </Tab>
            <Tab label="Mitglied">
                <ReferenceField source="memberId" reference="members" link="show">
                    <FullMemberNameTextField/>
                </ReferenceField>
            </Tab>
            <InternalTab/>
        </TabbedShowLayout>
    </Show>
};

