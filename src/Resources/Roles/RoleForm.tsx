import { NumberInput, required, TextInput } from "react-admin";
import { Box } from "@mui/material";
import { FC } from "react";
import { IdDisablingFormProps } from "../_Common/Form/FormProps";

export const RoleForm: FC<IdDisablingFormProps> = ({ disableIdInput }) => {
  return (
    <Box flex={2} mr="1em">
      <Box display="flex">
        <NumberInput
          style={{ width: "100%" }}
          disabled={disableIdInput}
          source="roleId"
          name="roleId"
          validate={required()}
        />
      </Box>
      <Box display="flex">
        <TextInput
          style={{ width: "100%" }}
          source="roleName"
          name="roleName"
          validate={required()}
        />
      </Box>

      <Box mt="1em" />
    </Box>
  );
};
