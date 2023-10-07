import { FC } from "react";
import { GeneralEventInfoFormSection } from "./GeneralEventInfoFormSection";
import { LocationFormSection } from "./LocationFormSection";
import { PeopleFormSection } from "./PeopleFormSection";
import { FormContentGrid } from "../../../_Common/Form/FormContentGrid";
import { IdHidingFormProps } from "../../../_Common/Form/FormProps";

export const EventFormGrid: FC<IdHidingFormProps> = (props) => {
  return (
    <FormContentGrid
      left={<GeneralEventInfoFormSection {...props} />}
      right={
        <>
          <LocationFormSection />
          <PeopleFormSection />
        </>
      }
    />
  );
};
