import React from "react";
import {FormContentGrid} from "../../../_Common/Form/FormContentGrid";
import {GeneralInformationSection} from "./GeneralInformationSection";
import {SensitiveInformationSection} from "./SensitiveInformationSection";

export const MemberFormGrid = props => {
    let {hideIdInput, ...rest} = props;
    return (
        <FormContentGrid
            left={<GeneralInformationSection {...props}/>}
            right={<SensitiveInformationSection {...rest}/>}
        />
    );
};
