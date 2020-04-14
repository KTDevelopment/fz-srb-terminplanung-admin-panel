import React from 'react';
import {NumberField, ReferenceField, ReferenceManyField, Show, SingleFieldList, Tab, TabbedShowLayout, TextField} from 'react-admin';
import {InternalTab} from "../_Common/InternalTab";
import {FullMemberNameChip} from "../_Common/MemberFullName";

export const RoleShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Allgemein">
                <ReferenceField source="roleId" reference="roles">
                    <NumberField source="roleId"/>
                </ReferenceField>
                <TextField source="roleName"/>
            </Tab>
            <Tab label="Mitglieder">
                <ReferenceManyField label="" source="roleId" reference="members" target="roles.roleId">
                    <SingleFieldList linkType="show">
                        <FullMemberNameChip />
                    </SingleFieldList>
                </ReferenceManyField>
            </Tab>
            <InternalTab/>
        </TabbedShowLayout>
    </Show>
);
