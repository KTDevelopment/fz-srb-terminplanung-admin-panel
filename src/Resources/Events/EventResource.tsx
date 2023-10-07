import { EventList } from "./EventsList";
import { Resource } from "react-admin";
import EventIcon from "@mui/icons-material/Event";
import { EventShow } from "./EventShow";
import { EventEdit } from "./EventCreateAndEdit/EventEdit";
import { EventCreate } from "./EventCreateAndEdit/EventCreate";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const EventResource = () => (
  <Resource
    name={ResourceNames.events}
    icon={EventIcon}
    list={EventList}
    show={EventShow}
    edit={EventEdit}
    create={EventCreate}
  />
);
