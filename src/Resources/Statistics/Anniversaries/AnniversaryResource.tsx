import { Resource } from "react-admin";
import StarIcon from "@mui/icons-material/Star";
import { AnniversariesList } from "./AnniversariesList";
import { AnniversaryShow } from "./AnniversaryShow";
import { ResourceNames } from "../../../Provider/APIDefinitions/apiDefinitions";

export const AnniversaryResource = () => (
  <Resource
    name={ResourceNames.anniversaries}
    icon={StarIcon}
    list={AnniversariesList}
    show={AnniversaryShow}
  />
);
