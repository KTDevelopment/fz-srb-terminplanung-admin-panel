import { ReferenceInput, SelectInput, TextInput } from "react-admin";
import { Box } from "@mui/material";
import { fullNameRender } from "../../_Common/MemberFullName";
import { ResourceNames } from "../../../Provider/APIDefinitions/apiDefinitions";

const deviceTypeChoices = [
  { id: "type_ios", name: "iOS" },
  { id: "type_android", name: "Android" },
];

export const DeviceFormGrid = () => {
  return (
    <Box flex={2} mr="1em">
      <Box display="flex">
        <TextInput
          style={{ width: "100%" }}
          source="registrationId"
          name="registrationId"
        />
      </Box>
      <ReferenceInput
        style={{ width: "100%" }}
        source="memberId"
        reference={ResourceNames.members}
        name="memberId"
      >
        <SelectInput optionText={fullNameRender} />
      </ReferenceInput>
      <SelectInput choices={deviceTypeChoices} source="deviceType" />
      <Box mt="1em" />
    </Box>
  );
};
