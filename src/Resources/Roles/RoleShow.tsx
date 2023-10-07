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

export const RoleShow = () => (
  <Show>
    <TabbedShowLayout>
      <Tab label="Allgemein">
        <ReferenceField source="roleId" reference={ResourceNames.roles}>
          <NumberField source="roleId" />
        </ReferenceField>
        <TextField source="roleName" />
      </Tab>
      <Tab label="Mitglieder">
        <ReferenceManyField
          label=""
          source="roleId"
          reference={ResourceNames.members}
          target="roles.roleId"
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
