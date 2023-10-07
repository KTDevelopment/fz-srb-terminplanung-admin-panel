import { Resource } from "react-admin";
import ExtensionIcon from "@mui/icons-material/Extension";
import { ParticipationsList } from "./ParticipationsList";
import { ParticipationShow } from "./ParticipationShow";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const ParticipationResource = () => (
  <Resource
    name={ResourceNames.participations}
    icon={ExtensionIcon}
    list={ParticipationsList}
    show={ParticipationShow}
  />
);
