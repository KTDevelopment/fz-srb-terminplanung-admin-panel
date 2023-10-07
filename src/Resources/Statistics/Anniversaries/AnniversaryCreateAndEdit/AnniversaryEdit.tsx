import { Edit } from "react-admin";
import { BasicForm } from "../../../_Common/Form/BasicForm";
import { AnniversaryFormGrid } from "./Components/AnniversaryFormGrid";

export const AnniversaryEdit = () => (
  <Edit>
    <BasicForm>
      <AnniversaryFormGrid />
    </BasicForm>
  </Edit>
);
