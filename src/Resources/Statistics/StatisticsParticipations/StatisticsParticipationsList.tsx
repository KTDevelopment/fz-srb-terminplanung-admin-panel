import {
  DatagridConfigurable,
  DeleteButton,
  Loading,
  NumberField,
  ReferenceField,
  SimpleList,
  TextField,
  useGetOne,
} from "react-admin";
import { ResponsiveList } from "../../_Common/ResponsiveList";
import {
  FullMemberNameTextField,
  fullNameRender,
} from "../../_Common/MemberFullName";
import { MemberAutoCompleteInput } from "../../_Common/MemberAutoCompleteInput";
import { ResourceNames } from "../../../Provider/APIDefinitions/apiDefinitions";

const filters = [MemberAutoCompleteInput()];

export const StatisticsParticipationsList = () => {
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
        <DatagridConfigurable rowClick="show">
          <NumberField source="id" />
          <ReferenceField
            source="memberId"
            reference={ResourceNames.members}
            link="show"
          >
            <FullMemberNameTextField />
          </ReferenceField>
          <ReferenceField
            source="statisticsEntryId"
            reference={ResourceNames.statisticsEntries}
            link="show"
          >
            <TextField source="name" />
          </ReferenceField>
          <NumberField source="performanceCount" />
          <DeleteButton label="" />
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
    return <p>ERROR</p>;
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
    return <p>ERROR</p>;
  }
  return statisticsEntry.name;
};
