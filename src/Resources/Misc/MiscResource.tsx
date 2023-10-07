import { Resource } from "react-admin";
import MiscIcon from "@mui/icons-material/ViewWeek";
import { MiscList } from "./MiscList";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const MiscResource = () => (
  <Resource name={ResourceNames.misc} icon={MiscIcon} list={MiscList} />
);
