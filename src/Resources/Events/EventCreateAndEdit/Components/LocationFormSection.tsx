import { Box, Typography } from "@mui/material";
import { SideBySide } from "../../../_Common/Form/SideBySide";
import { NumberInput, required, TextInput } from "react-admin";

export const LocationFormSection = () => {
  return (
    <Box flex={2} mr="1em">
      <Typography variant="h6">Wo</Typography>
      <SideBySide>
        <TextInput
          style={{ width: "100%" }}
          source="location"
          name="location"
          validate={required()}
        />
        <TextInput
          style={{ width: "100%" }}
          source="address"
          name="address"
          validate={required()}
        />
      </SideBySide>
      <SideBySide>
        <NumberInput
          style={{ width: "100%" }}
          source="postcode"
          name="postcode"
          validate={required()}
        />
        <TextInput
          style={{ width: "100%" }}
          source="town"
          name="town"
          validate={required()}
        />
      </SideBySide>
      <SideBySide>
        <NumberInput
          style={{ width: "100%" }}
          source="longitude"
          name="longitude"
          defaultValue={0}
        />
        <NumberInput
          style={{ width: "100%" }}
          source="latitude"
          name="latitude"
          defaultValue={0}
        />
      </SideBySide>
      <Box mt="1em" />
    </Box>
  );
};
