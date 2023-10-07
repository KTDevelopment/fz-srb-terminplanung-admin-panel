import { Resource } from "react-admin";
import ClassIcon from "@mui/icons-material/Class";
import { RolesList } from "./RolesList";
import { RoleShow } from "./RoleShow";
import { RoleEdit } from "./RoleEdit";
import { RoleCreate } from "./RoleCreate";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const RoleResource = () => (
  <Resource
    name={ResourceNames.roles}
    icon={ClassIcon}
    list={RolesList}
    show={RoleShow}
    edit={RoleEdit}
    create={RoleCreate}
  />
);
