import {
  DatagridConfigurable,
  NumberField,
  SimpleList,
  TextField,
} from "react-admin";
import { DataGridActions } from "../_Common/DataGridActions";
import { ResponsiveList } from "../_Common/ResponsiveList";

export const SectionsList = () => {
  return (
    <ResponsiveList
      primaryIdentifier={"sectionId"}
      smallList={
        <SimpleList
          linkType="show"
          primaryText={(record) =>
            record.sectionId + " - " + record.sectionName
          }
        />
      }
      normalList={
        <DatagridConfigurable rowClick="show">
          <NumberField source="sectionId" />
          <TextField source="sectionName" />
          <DataGridActions />
        </DatagridConfigurable>
      }
    />
  );
};
