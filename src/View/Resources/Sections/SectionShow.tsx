import React from 'react';
import {NumberField, ReferenceField, ReferenceManyField, Show, SingleFieldList, Tab, TabbedShowLayout, TextField} from 'react-admin';
import {InternalTab} from "../_Common/InternalTab";
import {FullMemberNameChip} from "../_Common/MemberFullName";

export const SectionShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Allgemein">
                <ReferenceField source="sectionId" reference="sections">
                    <NumberField source="sectionId"/>
                </ReferenceField>
                <TextField source="sectionName"/>
            </Tab>
            <Tab label="Mitglieder">
                <ReferenceManyField label="" source="sectionId" reference="members" target="sectionId">
                    <SingleFieldList linkType="show">
                        <FullMemberNameChip/>
                    </SingleFieldList>
                </ReferenceManyField>
            </Tab>
            <InternalTab/>
        </TabbedShowLayout>
    </Show>
);
