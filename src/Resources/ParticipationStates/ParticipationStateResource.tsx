import { Resource } from "react-admin";
import LabelIcon from "@mui/icons-material/Label";
import { ParticipationStatesList } from "./ParticipationStatesList";
import { ParticipationStateShow } from "./ParticipationStateShow";
import { ParticipationStateEdit } from "./ParticipationStateEdit";
import { ParticipationStateCreate } from "./ParticipationStateCreate";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const ParticipationStateResource = () => (
  <Resource
    name={ResourceNames.participationStates}
    icon={LabelIcon}
    list={ParticipationStatesList}
    show={ParticipationStateShow}
    edit={ParticipationStateEdit}
    create={ParticipationStateCreate}
  />
);

export const STATE__NOT_INVITED = 0;
export const STATE__INVITED = 1;
export const STATE__ATTEND = 2;
export const STATE__DO_NOT_ATTEND = 3;
export const STATE__INVITATION_REQUEST_PENDING = 4;
export const STATE__INVITATION_REQUEST_REJECTED = 5;
export const STATE__HAS_PARTICIPATED = 6;
export const STATE__HAS_NOT_PARTICIPATED = 7;
