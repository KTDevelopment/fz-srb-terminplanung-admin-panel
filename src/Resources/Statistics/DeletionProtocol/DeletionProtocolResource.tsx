import { Resource } from "react-admin";
import TrashIcon from "@mui/icons-material/Delete";
import { DeletionProtocolList } from "./DeletionProtocolList";
import { DeletionProtocolShow } from "./DeletionProtocolShow";
import { ResourceNames } from "../../../Provider/APIDefinitions/apiDefinitions";

export const DeletionProtocolResource = () => (
  <Resource
    name={ResourceNames.statisticsDeletionProtocols}
    icon={TrashIcon}
    list={DeletionProtocolList}
    show={DeletionProtocolShow}
  />
);
