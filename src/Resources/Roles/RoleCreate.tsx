import { Create } from "react-admin";
import { BasicForm } from "../_Common/Form/BasicForm";
import { RoleForm } from "./RoleForm";

export const RoleCreate = () => (
  <Create>
    <BasicForm>
      <RoleForm />
    </BasicForm>
  </Create>
);
