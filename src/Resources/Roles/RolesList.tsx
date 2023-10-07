import {
  DatagridConfigurable,
  NumberField,
  SimpleList,
  TextField,
} from "react-admin";
import { DataGridActions } from "../_Common/DataGridActions";
import { ResponsiveList } from "../_Common/ResponsiveList";

export const RolesList = () => {
  return (
    <ResponsiveList
      primaryIdentifier={"roleId"}
      smallList={
        <SimpleList
          linkType="show"
          primaryText={(record) => record.roleId + " - " + record.roleName}
        />
      }
      normalList={
        <DatagridConfigurable rowClick="show">
          <NumberField source="roleId" />
          <TextField source="roleName" />
          <DataGridActions />
        </DatagridConfigurable>
      }
    />
  );
};
