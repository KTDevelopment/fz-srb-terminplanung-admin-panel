import {
  DatagridConfigurable,
  DeleteButton,
  NumberField,
  ReferenceField,
  SimpleList,
  TextField,
} from "react-admin";
import { ResponsiveList } from "../_Common/ResponsiveList";
import { FullMemberNameTextField } from "../_Common/MemberFullName";
import { MemberAutoCompleteInput } from "../_Common/MemberAutoCompleteInput";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const DevicesList = () => {
  return (
    <ResponsiveList
      primaryIdentifier={"deviceId"}
      smallList={
        <SimpleList
          linkType="show"
          primaryText={(record) =>
            record.deviceId + " - " + record.registrationId
          }
          secondaryText={(record) => record.deviceType}
        />
      }
      normalList={
        <DatagridConfigurable rowClick="show">
          <NumberField source="deviceId" />
          <ReferenceField
            source="memberId"
            reference={ResourceNames.members}
            link="show"
          >
            <FullMemberNameTextField />
          </ReferenceField>
          <TextField source="registrationId" />
          <TextField source="deviceType" />
          <DeleteButton label="" />
        </DatagridConfigurable>
      }
      filters={[MemberAutoCompleteInput()]}
    />
  );
};
