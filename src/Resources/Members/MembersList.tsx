import {
  BooleanInput,
  DatagridConfigurable,
  DeleteButton,
  EditButton,
  NumberField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleList,
  TextField,
  TextInput,
  useRecordContext,
} from "react-admin";
import { ResponsiveList } from "../_Common/ResponsiveList";
import Stack from "@mui/material/Stack";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

const membersFilter = [
  <ReferenceInput
    key={1}
    label="Register"
    source="sectionId"
    reference={ResourceNames.sections}
    name="sectionId"
  >
    <SelectInput optionText="sectionName" label="Register" />
  </ReferenceInput>,
  <TextInput key={2} source="firstName" name="firstName" />,
  <TextInput key={3} source="lastName" name="lastName" />,
  <TextInput key={4} source="email" type="email" name="email" />,
  <BooleanInput
    key={5}
    label="is Gelöscht"
    source="isDeleted_eq"
    name="isDeleted_eq"
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

export const MembersList = () => {
  return (
    <ResponsiveList
      primaryIdentifier={"memberId"}
      smallList={
        <SimpleList
          linkType="show"
          primaryText={(record) => record.firstName + " " + record.lastName}
          secondaryText={(record) => record.email}
        />
      }
      normalList={
        <DatagridConfigurable rowClick="show">
          <TextField source="memberId" />
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
          <Stack direction="row">
            <EditButton label="" />
            <OptionalDeleteButton />
          </Stack>
        </DatagridConfigurable>
      }
      filters={membersFilter}
    />
  );
};

const OptionalDeleteButton = () => {
  const record = useRecordContext();
  if (record.isDeleted) {
    return null;
  } else {
    return <DeleteButton label="" />;
  }
};
