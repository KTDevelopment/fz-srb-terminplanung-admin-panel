import { Resource } from "react-admin";
import PhoneIcon from "@mui/icons-material/PhoneIphone";
import { DevicesList } from "./DevicesList";
import { DeviceShow } from "./DeviceShow";
import { DeviceCreate } from "./DeviceCreate";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const DeviceResource = () => (
  <Resource
    name={ResourceNames.devices}
    icon={PhoneIcon}
    list={DevicesList}
    show={DeviceShow}
    create={DeviceCreate}
  />
);
