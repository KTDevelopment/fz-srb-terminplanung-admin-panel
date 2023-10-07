import { BasicForm } from "../_Common/Form/BasicForm";
import { Create } from "react-admin";
import { DeviceFormGrid } from "./Components/DeviceFormGrid";

export const DeviceCreate = () => (
  <Create>
    <BasicForm>
      <DeviceFormGrid />
    </BasicForm>
  </Create>
);
