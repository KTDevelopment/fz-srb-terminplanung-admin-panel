import { Create } from "react-admin";
import { BasicForm } from "../_Common/Form/BasicForm";
import { ParticipationStateForm } from "./ParticipationStateForm";

export const ParticipationStateCreate = () => (
  <Create>
    <BasicForm>
      <ParticipationStateForm />
    </BasicForm>
  </Create>
);
