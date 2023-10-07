import { Resource } from "react-admin";
import { MembersList } from "./MembersList";
import PersonIcon from "@mui/icons-material/Person";
import { MemberShow } from "./MemberShow";
import { MemberEdit } from "./MemberCreateAndEdit/MemberEdit";
import { MemberCreate } from "./MemberCreateAndEdit/MemberCreate";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const MemberResource = () => (
  <Resource
    name={ResourceNames.members}
    icon={PersonIcon}
    list={MembersList}
    show={MemberShow}
    edit={MemberEdit}
    create={MemberCreate}
  />
);
