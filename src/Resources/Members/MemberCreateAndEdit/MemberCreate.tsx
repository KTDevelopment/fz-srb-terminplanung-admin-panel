import { Create } from "react-admin";
import { BasicForm } from "../../_Common/Form/BasicForm";
import { MemberFormGrid } from "./Components/MemberFormGrid";

export const MemberCreate = () => (
  <Create>
    <BasicForm>
      <MemberFormGrid hideIdInput />
    </BasicForm>
  </Create>
);
