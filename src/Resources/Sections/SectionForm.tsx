import { NumberInput, required, TextInput } from "react-admin";
import { Box } from "@mui/material";
import { FC } from "react";

export const SectionForm: FC = () => {
  return (
    <Box flex={2} mr="1em">
      <Box display="flex">
        <NumberInput
          style={{ width: "100%" }}
          source="sectionId"
          name="sectionId"
          validate={required()}
        />
      </Box>
      <Box display="flex">
        <TextInput
          style={{ width: "100%" }}
          source="sectionName"
          name="sectionName"
          validate={required()}
        />
      </Box>

      <Box mt="1em" />
    </Box>
  );
};
