import { NumberInput, required, TextInput } from "react-admin";
import { Box } from "@mui/material";
import { FC } from "react";
import { IdDisablingFormProps } from "../_Common/Form/FormProps";

export const ParticipationStateForm: FC<IdDisablingFormProps> = (props) => {
  const { disableIdInput } = props;

  return (
    <Box flex={2} mr="1em">
      <Box display="flex">
        <NumberInput
          style={{ width: "100%" }}
          disabled={disableIdInput}
          source="stateId"
          name="stateId"
          validate={required()}
        />
      </Box>
      <Box display="flex">
        <TextInput
          style={{ width: "100%" }}
          source="stateName"
          name="stateName"
          validate={required()}
        />
      </Box>

      <Box mt="1em" />
    </Box>
  );
};
