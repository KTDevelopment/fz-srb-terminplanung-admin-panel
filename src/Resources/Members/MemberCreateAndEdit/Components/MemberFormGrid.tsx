import { FormContentGrid } from "../../../_Common/Form/FormContentGrid";
import { GeneralInformationSection } from "./GeneralInformationSection";
import { SensitiveInformationSection } from "./SensitiveInformationSection";
import { FC } from "react";
import { IdHidingFormProps } from "../../../_Common/Form/FormProps";

export const MemberFormGrid: FC<IdHidingFormProps> = (props) => {
  return (
    <FormContentGrid
      left={<GeneralInformationSection {...props} />}
      right={<SensitiveInformationSection />}
    />
  );
};
