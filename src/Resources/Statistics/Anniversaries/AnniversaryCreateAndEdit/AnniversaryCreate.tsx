import { Create } from "react-admin";
import { BasicForm } from "../../../_Common/Form/BasicForm";
import { AnniversaryFormGrid } from "./Components/AnniversaryFormGrid";

export const AnniversaryCreate = () => (
  <Create>
    <BasicForm>
      <AnniversaryFormGrid disableIdInput />
    </BasicForm>
  </Create>
);
