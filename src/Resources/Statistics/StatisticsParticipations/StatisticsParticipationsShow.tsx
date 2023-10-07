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

export const StatisticsParticipationsShow = () => (
  <Show>
    <TabbedShowLayout>
      <Tab label="Allgemein">
        <NumberField source="id" />
        <ReferenceField
          source="memberId"
          reference={ResourceNames.members}
          emptyText="Mitglied wurde gelöscht"
          link="show"
        >
          <FullMemberNameTextField />
        </ReferenceField>
        <ReferenceField
          source="statisticsEntryId"
          reference={ResourceNames.statisticsEntries}
          link="show"
        >
          <TextField source="name" />
        </ReferenceField>
        <NumberField source="performanceCount" />
      </Tab>
      {InternalTab}
    </TabbedShowLayout>
  </Show>
);
