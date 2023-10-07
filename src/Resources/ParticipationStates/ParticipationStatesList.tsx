import {
  DatagridConfigurable,
  NumberField,
  SimpleList,
  TextField,
} from "react-admin";
import { DataGridActions } from "../_Common/DataGridActions";
import { ResponsiveList } from "../_Common/ResponsiveList";

export const ParticipationStatesList = () => {
  return (
    <ResponsiveList
      primaryIdentifier={"stateId"}
      smallList={
        <SimpleList
          linkType="show"
          primaryText={(record) => record.stateId + " - " + record.stateName}
        />
      }
      normalList={
        <DatagridConfigurable rowClick="show">
          <NumberField source="stateId" />
          <TextField source="stateName" />
          <DataGridActions />
        </DatagridConfigurable>
      }
    />
  );
};
