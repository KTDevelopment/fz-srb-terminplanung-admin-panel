import { AutocompleteInput, ReferenceInput } from "react-admin";
import { fullNameRender } from "./MemberFullName";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const MemberAutoCompleteInput = () => {
  return (
    <ReferenceInput
      source="memberId"
      name="memberId"
      reference={ResourceNames.members}
    >
      <AutocompleteInput
        optionText={fullNameRender}
        optionValue="memberId"
        name="memberId"
        filterToQuery={filterToQuery}
      />
    </ReferenceInput>
  );
};

function filterToQuery(searchText: string) {
  if (!searchText) return null;
  const split = searchText.split(" ");

  if (split[1] !== undefined && split[1].trim() !== "") {
    return {
      firstName: split[0],
      lastName: split[1],
    };
  }

  return {
    firstName: split[0],
  };
}
