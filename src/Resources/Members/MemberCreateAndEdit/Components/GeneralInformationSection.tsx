import { FC } from "react";
import {
  BooleanInput,
  CheckboxGroupInput,
  NumberInput,
  ReferenceArrayInput,
  ReferenceInput,
  required,
  SelectInput,
  TextInput,
  useRecordContext,
} from "react-admin";
import { Box, Typography } from "@mui/material";
import { SideBySide } from "../../../_Common/Form/SideBySide";
import { IdHidingFormProps } from "../../../_Common/Form/FormProps";
import { ResourceNames } from "../../../../Provider/APIDefinitions/apiDefinitions";

export const GeneralInformationSection: FC<IdHidingFormProps> = ({
  hideIdInput,
}) => {
  const record = useRecordContext();
  const shouldShowIsDeletedInput = !hideIdInput && record.isDeleted;

  return (
    <Box flex={2} mr="1em">
      <Typography variant="h6">Allgemein</Typography>
      {hideIdInput ? null : (
        <Box display="flex">
          <TextInput
            style={{ width: "100%" }}
            disabled
            source="memberId"
            name="memberId"
          />
        </Box>
      )}
      <SideBySide>
        <TextInput
          style={{ width: "100%" }}
          source="firstName"
          name="firstName"
          validate={required()}
        />
        <TextInput
          style={{ width: "100%" }}
          source="lastName"
          name="lastName"
          validate={required()}
        />
      </SideBySide>
      <SideBySide>
        <TextInput
          style={{ width: "100%" }}
          source="email"
          type="email"
          name="email"
          validate={required()}
        />
        <NumberInput
          style={{ width: "100%" }}
          source="performanceCount"
          name="performanceCount"
          validate={required()}
        />
      </SideBySide>
      <Box display="flex">
        <ReferenceInput
          style={{ width: "100%" }}
          source="sectionId"
          reference={ResourceNames.sections}
          name="sectionId"
        >
          <SelectInput
            label="Register"
            optionText="sectionName"
            validate={required()}
          />
        </ReferenceInput>
      </Box>
      <Box display="flex">
        <ReferenceArrayInput
          style={{ width: "100%" }}
          label="Rollen"
          source="roleIds"
          reference={ResourceNames.roles}
          name="roleIds"
        >
          <CheckboxGroupInput optionText="roleName" validate={required()} />
        </ReferenceArrayInput>
      </Box>
      {shouldShowIsDeletedInput && (
        <Box display="flex">
          <BooleanInput
            label="is Gelöscht"
            source="isDeleted"
            name="isDeleted"
            parse={(value: boolean) => {
              if (value) {
                return 1;
              } else {
                return 0;
              }
            }}
          />
        </Box>
      )}
      <Box mt="1em" />
    </Box>
  );
};
