import {
  BooleanField,
  BooleanInput,
  DatagridConfigurable,
  DateField,
  NumberField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleList,
  TextField,
  TextInput,
} from "react-admin";
import { ResponsiveList } from "../../_Common/ResponsiveList";
import { EventAutoCompleteInput } from "../../_Common/EventAutoCompleteInput";
import { ResourceNames } from "../../../Provider/APIDefinitions/apiDefinitions";

const filters = [
  <ReferenceInput
    key={1}
    label="Register"
    source="sectionId"
    reference={ResourceNames.sections}
    name="sectionId"
  >
    <SelectInput optionText="sectionName" />
  </ReferenceInput>,
  EventAutoCompleteInput(),
  <TextInput key={3} source="name" name="name" />,
  <BooleanInput
    key={4}
    label="is Abgeschlossen"
    source="isProcessed_eq"
    name="isProcessed_eq"
    defaultValue={1}
    parse={(value: boolean) => {
      if (value) {
        return 1;
      } else {
        return 0;
      }
    }}
  />,
];

export const StatisticsEntriesList = () => {
  return (
    <ResponsiveList
      smallList={
        <SimpleList
          linkType="show"
          primaryText={(record) => record.name}
          secondaryText={(record) => record.locationString}
        />
      }
      normalList={
        <DatagridConfigurable rowClick="show" bulkActionButtons={false}>
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
        </DatagridConfigurable>
      }
      filters={filters}
      hasCreate={false}
    />
  );
};
