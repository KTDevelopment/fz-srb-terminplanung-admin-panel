import {
  DatagridConfigurable,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";
import { FullMemberNameTextField } from "../_Common/MemberFullName";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const ParticipationsList = () => {
  return (
    <List>
      <DatagridConfigurable bulkActionButtons={false} rowClick="show">
        <NumberField source="id" />
        <ReferenceField
          source="memberId"
          reference={ResourceNames.members}
          emptyText="Mitglied wurde gelöscht"
          link="show"
        >
          <FullMemberNameTextField />
        </ReferenceField>
        <ReferenceField
          source="eventId"
          reference={ResourceNames.events}
          link="show"
        >
          <TextField source="eventName" />
        </ReferenceField>
        <ReferenceField
          source="stateId"
          reference={ResourceNames.participationStates}
          link="show"
        >
          <TextField source="stateName" />
        </ReferenceField>
      </DatagridConfigurable>
    </List>
  );
};
