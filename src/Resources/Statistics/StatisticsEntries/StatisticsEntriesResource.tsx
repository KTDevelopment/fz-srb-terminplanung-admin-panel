import { Resource } from "react-admin";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { StatisticsEntriesList } from "./StatisticsEntriesList";
import { StatisticsEntriesShow } from "./StatisticsEntriesShow";
import { ResourceNames } from "../../../Provider/APIDefinitions/apiDefinitions";

export const StatisticsEntriesResource = () => (
  <Resource
    name={ResourceNames.statisticsEntries}
    icon={AnalyticsIcon}
    list={StatisticsEntriesList}
    show={StatisticsEntriesShow}
  />
);
