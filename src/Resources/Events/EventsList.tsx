import {
  DatagridConfigurable,
  DateField,
  DateInput,
  SimpleList,
  TextField,
  TextInput,
} from "react-admin";
import { DataGridActions } from "../_Common/DataGridActions";
import { ResponsiveList } from "../_Common/ResponsiveList";

const eventsFilter = [
  <TextInput
    key={1}
    source="eventName"
    name="eventName"
    label="Name der Veranstaltung"
  />,
  <TextInput key={2} source="summary" name="summary" label="Zusammenfassung" />,
  <DateInput
    key={3}
    source="startDate_gte"
    name="startDate_gte"
    label="Start Datum ab"
  />,
];

export const EventList = () => {
  return (
    <ResponsiveList
      primaryIdentifier={"eventId"}
      smallList={
        <SimpleList
          linkType="show"
          primaryText={(record) => record.eventName}
          secondaryText={(record) => record.summary}
        />
      }
      normalList={
        <DatagridConfigurable rowClick="show">
          <TextField source="eventId" />
          <TextField source="eventName" />
          <DateField source="startDate" />
          <DateField source="endDate" />
          <TextField source="summary" />
          <DataGridActions />
        </DatagridConfigurable>
      }
      filters={eventsFilter}
    />
  );
};
