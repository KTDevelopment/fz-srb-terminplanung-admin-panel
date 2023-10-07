import {
  BooleanField,
  Datagrid,
  DateField,
  Loading,
  NumberField,
  Pagination,
  ReferenceField,
  ReferenceManyField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
  useGetMany,
  useGetManyReference,
  useRecordContext,
} from "react-admin";
import { InternalTab } from "../_Common/InternalTab";
import { fullNameRender } from "../_Common/MemberFullName";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const EventShow = () => (
  <Show>
    <TabbedShowLayout>
      <Tab label="Allgemein">
        <ReferenceField source="eventId" reference={ResourceNames.events}>
          <TextField source="id" />
        </ReferenceField>
        <TextField source="remoteId" />
        <TextField source="eventName" />
        <DateField showTime source="startDate" />
        <DateField showTime source="endDate" />
        <TextField source="category" />
        <TextField source="summary" />
        <TextField source="description" />
      </Tab>
      <Tab label="Wo" path="where">
        <TextField source="location" />
        <TextField source="address" />
        <NumberField source="postcode" />
        <TextField source="town" />
        <NumberField source="longitude" />
        <NumberField source="latitude" />
      </Tab>
      <Tab label="Wer" path="who">
        <TextField source="dress" />
        <TextField source="participatingGroup" />
        <BooleanField source="isPublic" />
      </Tab>
      <Tab label="Statistik" path={ResourceNames.participations}>
        <ReferenceManyField
          label="Statistik Einträge"
          perPage={25}
          pagination={<Pagination />}
          reference={ResourceNames.statisticsEntries}
          target="eventId"
        >
          <Datagrid
            bulkActionButtons={false}
            expand={StatistikDetails}
            rowClick="show"
          >
            <ReferenceField
              source="sectionId"
              reference={ResourceNames.sections}
              link={false}
            >
              <TextField source="sectionName" />
            </ReferenceField>
            <TextField source="name" />
            <BooleanField source="isProcessed" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
      {InternalTab}
    </TabbedShowLayout>
  </Show>
);

const StatistikDetails = () => {
  const record = useRecordContext();
  const {
    data: participations,
    isLoading: isLoadingParticipations,
    error: errorOfParticipations,
  } = useGetManyReference(ResourceNames.statisticsParticipations, {
    target: "statisticsEntryId",
    id: record.id,
    pagination: { page: 1, perPage: 100 },
  });
  const {
    data: members,
    isLoading,
    error,
  } = useGetMany(ResourceNames.members, {
    ids: participations?.map((it) => it.memberId) || [],
  });
  if (isLoadingParticipations || isLoading) {
    return <Loading />;
  }
  if (errorOfParticipations || error) {
    return <p>ERROR</p>;
  }
  if (!members || members.length === 0) {
    return <div>Keine Mitglieder gefunden</div>;
  }

  return <div>{members.map(fullNameRender).join(", ")}</div>;
};
