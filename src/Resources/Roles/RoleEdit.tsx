import { Edit } from "react-admin";
import { BasicForm } from "../_Common/Form/BasicForm";
import { RoleForm } from "./RoleForm";

export const RoleEdit = () => (
  <Edit>
    <BasicForm>
      <RoleForm disableIdInput />
    </BasicForm>
  </Edit>
);
