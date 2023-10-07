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

export const ParticipationShow = () => (
  <Show>
    <TabbedShowLayout>
      <Tab label="Allgemein">
        <ReferenceField source="id" reference={ResourceNames.participations}>
          <NumberField source="id" />
        </ReferenceField>
        <ReferenceField
          source="memberId"
          reference={ResourceNames.members}
          emptyText="Mitglied wurde gelöscht"
          link="show"
        >
          <FullMemberNameTextField />
        </ReferenceField>
        <ReferenceField
          source="eventId"
          reference={ResourceNames.events}
          link="show"
        >
          <TextField source="eventName" />
        </ReferenceField>
        <ReferenceField
          source="stateId"
          reference={ResourceNames.participationStates}
          link="show"
        >
          <TextField source="stateName" />
        </ReferenceField>
      </Tab>
      {InternalTab}
    </TabbedShowLayout>
  </Show>
);
