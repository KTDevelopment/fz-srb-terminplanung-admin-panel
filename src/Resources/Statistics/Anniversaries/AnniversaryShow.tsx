import {
  NumberField,
  ReferenceField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";
import { InternalTab } from "../../_Common/InternalTab";
import { FullMemberNameTextField } from "../../_Common/MemberFullName";
import { ResourceNames } from "../../../Provider/APIDefinitions/apiDefinitions";

export const AnniversaryShow = () => (
  <Show>
    <TabbedShowLayout>
      <Tab label="Allgemein">
        <ReferenceField
          source="anniversaryId"
          reference={ResourceNames.anniversaries}
        >
          <NumberField source="anniversaryId" />
        </ReferenceField>
        <TextField source="performanceCount" />
        <ReferenceField
          source="eventId"
          reference={ResourceNames.events}
          link="show"
        >
          <TextField source="eventName" />
        </ReferenceField>
        <ReferenceField
          source="memberId"
          reference={ResourceNames.members}
          emptyText="Mitglied wurde gelöscht"
          link="show"
        >
          <FullMemberNameTextField />
        </ReferenceField>
      </Tab>
      {InternalTab}
    </TabbedShowLayout>
  </Show>
);
