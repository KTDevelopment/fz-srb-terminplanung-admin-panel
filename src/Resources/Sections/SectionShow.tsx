import {
  NumberField,
  ReferenceField,
  ReferenceManyField,
  Show,
  SingleFieldList,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";
import { InternalTab } from "../_Common/InternalTab";
import { FullMemberNameChip } from "../_Common/MemberFullName";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const SectionShow = () => (
  <Show>
    <TabbedShowLayout>
      <Tab label="Allgemein">
        <ReferenceField source="sectionId" reference={ResourceNames.sections}>
          <NumberField source="sectionId" />
        </ReferenceField>
        <TextField source="sectionName" />
      </Tab>
      <Tab label="Mitglieder">
        <ReferenceManyField
          label=""
          source="sectionId"
          reference={ResourceNames.members}
          target="sectionId"
        >
          <SingleFieldList linkType="show">
            <FullMemberNameChip />
          </SingleFieldList>
        </ReferenceManyField>
      </Tab>
      {InternalTab}
    </TabbedShowLayout>
  </Show>
);
