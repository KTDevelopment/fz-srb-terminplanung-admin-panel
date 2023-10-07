import { Resource } from "react-admin";
import ExtensionIcon from "@mui/icons-material/Extension";
import { StatisticsParticipationsList } from "./StatisticsParticipationsList";
import { StatisticsParticipationsShow } from "./StatisticsParticipationsShow";
import { ResourceNames } from "../../../Provider/APIDefinitions/apiDefinitions";

export const StatisticsParticipationsResource = () => (
  <Resource
    name={ResourceNames.statisticsParticipations}
    icon={ExtensionIcon}
    list={StatisticsParticipationsList}
    show={StatisticsParticipationsShow}
  />
);
