import {
  NumberField,
  ReferenceField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";
import { InternalTab } from "../../_Common/InternalTab";
import { FullMemberNameTextField } from "../../_Common/MemberFullName";
import { ResourceNames } from "../../../Provider/APIDefinitions/apiDefinitions";

export const DeletionProtocolShow = () => (
  <Show>
    <TabbedShowLayout>
      <Tab label="Allgemein">
        <NumberField source="id" />
        <ReferenceField
          source="memberId"
          reference={ResourceNames.members}
          link="show"
          queryOptions={{
            meta: { includeDeleted: true },
          }}
        >
          <FullMemberNameTextField />
        </ReferenceField>
        <ReferenceField
          source="statisticsEntryId"
          reference={ResourceNames.statisticsEntries}
          link="show"
        >
          <TextField source="name" />
          {" -- "}
          <TextField source="locationString" />
        </ReferenceField>
        <NumberField source="performanceCount" />
        <TextField source="deletingMemeberName" />
      </Tab>
      {InternalTab}
    </TabbedShowLayout>
  </Show>
);
