import { Edit } from "react-admin";
import { BasicForm } from "../../_Common/Form/BasicForm";
import { MemberFormGrid } from "./Components/MemberFormGrid";

export const MemberEdit = () => (
  <Edit>
    <BasicForm>
      <MemberFormGrid />
    </BasicForm>
  </Edit>
);
