import { Create } from "react-admin";
import { EventFormGrid } from "./Components/EventFormGrid";
import { BasicForm } from "../../_Common/Form/BasicForm";

export const EventCreate = () => (
  <Create>
    <BasicForm>
      <EventFormGrid hideIdInput />
    </BasicForm>
  </Create>
);
