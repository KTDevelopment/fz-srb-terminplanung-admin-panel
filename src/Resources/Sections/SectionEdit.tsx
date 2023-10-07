import { Edit } from "react-admin";
import { BasicForm } from "../_Common/Form/BasicForm";
import { SectionForm } from "./SectionForm";

export const SectionEdit = () => (
  <Edit>
    <BasicForm>
      <SectionForm />
    </BasicForm>
  </Edit>
);
