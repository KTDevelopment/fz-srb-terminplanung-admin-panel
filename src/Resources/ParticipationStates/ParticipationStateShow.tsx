import {
  NumberField,
  ReferenceField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";
import { InternalTab } from "../_Common/InternalTab";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const ParticipationStateShow = () => (
  <Show>
    <TabbedShowLayout>
      <Tab label="Allgemein">
        <ReferenceField
          source="stateId"
          reference={ResourceNames.participationStates}
        >
          <NumberField source="stateId" />
        </ReferenceField>
        <TextField source="stateName" />
      </Tab>
      {InternalTab}
    </TabbedShowLayout>
  </Show>
);
