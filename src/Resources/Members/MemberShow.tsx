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
  TextField,
} from "react-admin";
import { InternalTab } from "../_Common/InternalTab";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const MemberShow = () => (
  <Show>
    <TabbedShowLayout>
      <Tab label="Allgemein">
        <ReferenceField source="memberId" reference={ResourceNames.members}>
          <TextField source="memberId" />
        </ReferenceField>
        <TextField source="firstName" />
        <TextField source="lastName" />
        <TextField source="email" />
        <NumberField source="performanceCount" />
        <ReferenceField
          label="Register"
          source="sectionId"
          reference={ResourceNames.sections}
          link="show"
        >
          <TextField source="sectionName" />
        </ReferenceField>
        <ReferenceArrayField
          label="Rollen"
          source="roleIds"
          reference={ResourceNames.roles}
        >
          <SingleFieldList linkType="show">
            <ChipField source="roleName" />
          </SingleFieldList>
        </ReferenceArrayField>
        <BooleanField source="isDeleted" />
      </Tab>
      {InternalTab}
    </TabbedShowLayout>
  </Show>
);
