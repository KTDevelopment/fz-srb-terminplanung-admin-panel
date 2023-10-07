import {
  DatagridConfigurable,
  Loading,
  NumberField,
  ReferenceField,
  SimpleList,
  TextField,
  TextInput,
  useGetOne,
} from "react-admin";
import {
  FullMemberNameTextField,
  fullNameRender,
} from "../../_Common/MemberFullName";
import { ResponsiveList } from "../../_Common/ResponsiveList";
import { MemberAutoCompleteInput } from "../../_Common/MemberAutoCompleteInput";
import { ResourceNames } from "../../../Provider/APIDefinitions/apiDefinitions";

const filters = [
  MemberAutoCompleteInput(),
  <TextInput key={2} source="deletingMemeberName" name="deletingMemeberName" />,
];

export const DeletionProtocolList = () => {
  return (
    <ResponsiveList
      smallList={
        <SimpleList
          linkType="show"
          primaryText={PrimaryText}
          secondaryText={SecondaryText}
        />
      }
      normalList={
        <DatagridConfigurable rowClick="show" bulkActionButtons={false}>
          <NumberField source="id" />
          <ReferenceField
            source="memberId"
            reference={ResourceNames.members}
            link="show"
            emptyText="Mitglied ist gelöscht"
          >
            <FullMemberNameTextField />
          </ReferenceField>
          <ReferenceField
            source="statisticsEntryId"
            reference={ResourceNames.statisticsEntries}
            link="show"
            emptyText="Statisktik Eintrag ist gelöscht"
          >
            <TextField source="name" />
            {" -- "}
            <TextField source="locationString" />
          </ReferenceField>
          <NumberField source="performanceCount" />
          <TextField source="deletingMemeberName" />
        </DatagridConfigurable>
      }
      filters={filters}
      hasCreate={false}
    />
  );
};

const PrimaryText = (record: any) => {
  const {
    data: member,
    isLoading,
    error,
  } = useGetOne(ResourceNames.members, { id: record.memberId });
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>Mitglied ist gelöscht</p>;
  }
  return fullNameRender(member);
};

const SecondaryText = (record: any) => {
  const {
    data: statisticsEntry,
    isLoading,
    error,
  } = useGetOne(ResourceNames.statisticsEntries, {
    id: record.statisticsEntryId,
  });
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>Statisktik Eintrag ist gelöscht</p>;
  }
  return statisticsEntry.name;
};
