import { Resource } from "react-admin";
import PeopleIcon from "@mui/icons-material/People";
import { SectionsList } from "./SectionsList";
import { SectionShow } from "./SectionShow";
import { SectionEdit } from "./SectionEdit";
import { SectionCreate } from "./SectionCreate";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const SectionResource = () => (
  <Resource
    name={ResourceNames.sections}
    icon={PeopleIcon}
    list={SectionsList}
    show={SectionShow}
    edit={SectionEdit}
    create={SectionCreate}
  />
);
