// @ts-ignore
import React from 'react';
import {
    BooleanField,
    ChipField,
    NumberField,
    ReferenceArrayField,
    ReferenceField,
    Show,
    SingleFieldList,
    Tab,
    TabbedShowLayout,
    TextField
} from 'react-admin';
import {InternalTab} from "../_Common/InternalTab";

export const MemberShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Allgemein">
                <ReferenceField source="memberId" reference="members">
                    <TextField source="memberId"/>
                </ReferenceField>
                <TextField source="firstName"/>
                <TextField source="lastName"/>
                <TextField source="email"/>
                <NumberField source="performanceCount"/>
                <ReferenceField label="Register" source="sectionId" reference="sections" link="show">
                    <TextField source="sectionName"/>
                </ReferenceField>
                <ReferenceArrayField label="Rollen" source="roleIds" reference="roles">
                    <SingleFieldList linkType="show">
                        <ChipField source="roleName"/>
                    </SingleFieldList>
                </ReferenceArrayField>
                <BooleanField source="isDeleted"/>
            </Tab>
            <InternalTab/>
        </TabbedShowLayout>
    </Show>
);
