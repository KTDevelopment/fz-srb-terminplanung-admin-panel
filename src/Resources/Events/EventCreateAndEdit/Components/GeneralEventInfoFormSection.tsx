import { Box, Typography } from "@mui/material";
import { SideBySide } from "../../../_Common/Form/SideBySide";
import { DateTimeInput, NumberInput, required, TextInput } from "react-admin";
import { FC } from "react";
import { IdHidingFormProps } from "../../../_Common/Form/FormProps";

export const GeneralEventInfoFormSection: FC<IdHidingFormProps> = ({
  hideIdInput,
}) => {
  return (
    <Box flex={2} mr="1em">
      <Typography variant="h6">Allgemein</Typography>
      <SideBySide>
        {hideIdInput ? (
          <TextInput
            style={{ width: "100%" }}
            source={"eventName"}
            name={"eventName"}
            validate={required()}
          />
        ) : (
          <NumberInput
            style={{ width: "100%" }}
            disabled
            source={"eventId"}
            name={"eventId"}
          />
        )}
        {hideIdInput ? null : (
          <TextInput
            style={{ width: "100%" }}
            source={"eventName"}
            name={"eventName"}
            validate={required()}
          />
        )}
      </SideBySide>
      <SideBySide>
        <DateTimeInput
          style={{ width: "100%" }}
          source={"startDate"}
          name={"startDate"}
          validate={required()}
        />
        <DateTimeInput
          style={{ width: "100%" }}
          source={"endDate"}
          name={"endDate"}
          validate={required()}
        />
      </SideBySide>
      <Box display="flex">
        <TextInput
          style={{ width: "100%" }}
          source="category"
          name={"category"}
          defaultValue=""
        />
      </Box>
      <Box display="flex">
        <TextInput
          style={{ width: "100%" }}
          multiline
          source={"summary"}
          name={"summary"}
          validate={required()}
        />
      </Box>
      <Box display="flex">
        <TextInput
          style={{ width: "100%" }}
          multiline
          source={"description"}
          name={"description"}
          defaultValue=""
        />
      </Box>
      <Box mt="1em" />
    </Box>
  );
};
