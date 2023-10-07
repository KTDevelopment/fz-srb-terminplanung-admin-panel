import { Edit } from "react-admin";
import { EventFormGrid } from "./Components/EventFormGrid";
import { BasicForm } from "../../_Common/Form/BasicForm";

export const EventEdit = () => (
  <Edit>
    <BasicForm>
      <EventFormGrid />
    </BasicForm>
  </Edit>
);
