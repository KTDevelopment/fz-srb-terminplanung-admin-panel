import { DateField, NumberField, Tab } from "react-admin";

export const InternalTab = (
  <Tab label="Intern" path="internal">
    <DateField showTime source="creationDate" />
    <DateField showTime source="updateDate" />
    <NumberField source="version" />
  </Tab>
);
