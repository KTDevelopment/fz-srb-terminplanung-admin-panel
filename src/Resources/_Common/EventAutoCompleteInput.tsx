import {
  AutocompleteInput,
  ReferenceInput,
  useRecordContext,
} from "react-admin";
import { DateTime } from "luxon";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

const OptionRenderer = () => {
  const record = useRecordContext();
  const date = DateTime.fromISO(record.startDate);
  return (
    <span>
      {record.eventName} {date.toFormat("dd-MM-yyyy")}
    </span>
  );
};
const optionText = <OptionRenderer />;
const inputText = (choice: { eventName: any }) => choice.eventName;

export const EventAutoCompleteInput = () => {
  return (
    <ReferenceInput
      source="eventId"
      name="eventId"
      reference={ResourceNames.events}
    >
      <AutocompleteInput
        optionText={optionText}
        inputText={inputText}
        optionValue="eventId"
        name="eventId"
        filterToQuery={(searchText: any) => {
          return searchText
            ? {
                eventName: searchText,
              }
            : null;
        }}
      />
    </ReferenceInput>
  );
};
