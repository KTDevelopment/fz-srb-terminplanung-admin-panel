import { Create } from "react-admin";
import { BasicForm } from "../_Common/Form/BasicForm";
import { SectionForm } from "./SectionForm";

export const SectionCreate = () => (
  <Create>
    <BasicForm>
      <SectionForm />
    </BasicForm>
  </Create>
);
