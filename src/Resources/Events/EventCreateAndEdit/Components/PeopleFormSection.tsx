import { BooleanInput, TextInput } from "react-admin";
import { Box, Typography } from "@mui/material";
import { SideBySide } from "../../../_Common/Form/SideBySide";

export const PeopleFormSection = () => {
  return (
    <Box flex={2} mr="1em">
      <Typography variant="h6">Wer</Typography>
      <SideBySide>
        <TextInput
          style={{ width: "100%" }}
          source="participatingGroup"
          name="participatingGroup"
          defaultValue=""
        />
        <TextInput
          style={{ width: "100%" }}
          source="dress"
          name="dress"
          defaultValue=""
        />
      </SideBySide>
      <div style={{ display: "none" }}>
        <BooleanInput
          source="isPublic"
          name="isPublic"
          defaultValue={true}
          disabled
        />
      </div>
      <Box mt="1em" />
    </Box>
  );
};
