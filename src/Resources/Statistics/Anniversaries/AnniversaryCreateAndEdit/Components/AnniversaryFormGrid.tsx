import {
  AutocompleteInput,
  FormDataConsumer,
  NumberInput,
  ReferenceInput,
  required,
  useGetOne,
} from "react-admin";
import { Box } from "@mui/material";
import { FC } from "react";
import { IdHidingFormProps } from "../../../../_Common/Form/FormProps";
import { MemberAutoCompleteInput } from "../../../../_Common/MemberAutoCompleteInput";
import { useWatch } from "react-hook-form";
import { ResourceNames } from "../../../../../Provider/APIDefinitions/apiDefinitions";

export const AnniversaryFormGrid: FC<IdHidingFormProps> = (props) => {
  const { hideIdInput } = props;

  return (
    <Box flex={2} mr="1em">
      {hideIdInput ? null : (
        <Box display="flex">
          <NumberInput
            style={{ width: "100%" }}
            disabled
            source="anniversaryId"
            name="anniversaryId"
          />
        </Box>
      )}
      <Box display="flex">
        <NumberInput
          style={{ width: "100%" }}
          source="performanceCount"
          name="performanceCount"
          validate={required()}
        />
      </Box>
      <MemberAutoCompleteInput />
      <FormDataConsumer<{ memberId: string }>>
        {({ formData }) => {
          if (formData.memberId) {
            return <StatisticsEntryInput />;
          }
        }}
      </FormDataConsumer>
      <Box mt="1em" />
    </Box>
  );
};

const StatisticsEntryInput = () => {
  const memberId = useWatch({ name: "memberId" });

  const {
    data: member,
    isLoading,
    error,
  } = useGetOne(ResourceNames.members, { id: memberId });

  if (isLoading) return null;
  if (error) return <p>Fehler aufgetreten</p>;
  if (!member) return <p>keine Statistik Einträge für das Register gefunden</p>;

  return (
    <ReferenceInput
      source="statisticsEntryId"
      name="statisticsEntryId"
      reference={ResourceNames.statisticsEntries}
      filter={{ sectionId: member.sectionId }}
    >
      <AutocompleteInput
        optionText="name"
        optionValue="statisticsEntryId"
        name="statisticsEntryId"
        source="statisticsEntryId"
        filterToQuery={(searchText: any) => {
          return searchText
            ? {
                name: searchText,
              }
            : null;
        }}
      />
    </ReferenceInput>
  );
};
