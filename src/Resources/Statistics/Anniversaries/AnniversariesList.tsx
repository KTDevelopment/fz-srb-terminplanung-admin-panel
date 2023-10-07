import {
  DatagridConfigurable,
  NumberField,
  ReferenceField,
  SimpleList,
  TextField,
} from "react-admin";
import { FullMemberNameTextField } from "../../_Common/MemberFullName";
import { ResponsiveList } from "../../_Common/ResponsiveList";
import { ResourceNames } from "../../../Provider/APIDefinitions/apiDefinitions";

export const AnniversariesList = () => {
  return (
    <ResponsiveList
      primaryIdentifier={"anniversaryId"}
      smallList={
        <SimpleList
          linkType="show"
          primaryText={(record) =>
            record.anniversaryId + " - " + record.performanceCount
          }
          secondaryText={(record) => record.eventId}
        />
      }
      normalList={
        <DatagridConfigurable bulkActionButtons={false} rowClick="show">
          <NumberField source="anniversaryId" />
          <NumberField source="performanceCount" />
          <ReferenceField
            source="statisticsEntryId"
            reference={ResourceNames.statisticsEntries}
            link="show"
          >
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField
            source="memberId"
            reference={ResourceNames.members}
            link="show"
          >
            <FullMemberNameTextField />
          </ReferenceField>
        </DatagridConfigurable>
      }
      hasCreate={false}
    />
  );
};
