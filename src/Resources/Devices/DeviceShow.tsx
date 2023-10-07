import {
  NumberField,
  ReferenceField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";
import { InternalTab } from "../_Common/InternalTab";
import { FullMemberNameTextField } from "../_Common/MemberFullName";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const DeviceShow = () => {
  return (
    <Show>
      <TabbedShowLayout>
        <Tab label="Allgemein">
          <ReferenceField source="deviceId" reference={ResourceNames.devices}>
            <NumberField source="deviceId" />
          </ReferenceField>
          <TextField source="registrationId" />
          <TextField source="deviceType" />
        </Tab>
        <Tab label="Mitglied">
          <ReferenceField
            source="memberId"
            reference={ResourceNames.members}
            link="show"
          >
            <FullMemberNameTextField />
          </ReferenceField>
        </Tab>
        {InternalTab}
      </TabbedShowLayout>
    </Show>
  );
};
