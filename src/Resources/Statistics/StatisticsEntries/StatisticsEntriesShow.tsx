import {
  BooleanField,
  Datagrid,
  DateField,
  NumberField,
  Pagination,
  ReferenceField,
  ReferenceManyField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";
import { InternalTab } from "../../_Common/InternalTab";
import { FullMemberNameTextField } from "../../_Common/MemberFullName";
import { ResourceNames } from "../../../Provider/APIDefinitions/apiDefinitions";

export const StatisticsEntriesShow = () => (
  <Show>
    <TabbedShowLayout>
      <Tab label="Allgemein">
        <NumberField source="id" />
        <TextField source="name" />
        <TextField source="locationString" />
        <DateField showTime source="date" />
        <ReferenceField
          source="eventId"
          reference={ResourceNames.events}
          link="show"
        >
          <TextField source="eventName" />
        </ReferenceField>
        <ReferenceField
          source="sectionId"
          reference={ResourceNames.sections}
          link="show"
        >
          <TextField source="sectionName" />
        </ReferenceField>
        <BooleanField source="isProcessed" />
      </Tab>
      <Tab label="Teilnehmer" path={ResourceNames.participations}>
        <ReferenceManyField
          label=""
          perPage={25}
          pagination={<Pagination />}
          reference={ResourceNames.statisticsParticipations}
          target="statisticsEntryId"
        >
          <Datagrid bulkActionButtons={false} rowClick="show">
            <ReferenceField
              source="memberId"
              reference={ResourceNames.members}
              link={false}
            >
              <FullMemberNameTextField />
            </ReferenceField>
            <NumberField source="performanceCount" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
      {InternalTab}
    </TabbedShowLayout>
  </Show>
);
