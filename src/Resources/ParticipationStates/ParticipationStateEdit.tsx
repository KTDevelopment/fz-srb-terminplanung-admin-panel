import { Edit } from "react-admin";
import { BasicForm } from "../_Common/Form/BasicForm";
import { ParticipationStateForm } from "./ParticipationStateForm";

export const ParticipationStateEdit = () => (
  <Edit>
    <BasicForm>
      <ParticipationStateForm disableIdInput />
    </BasicForm>
  </Edit>
);
