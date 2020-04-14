import {GeneralEventInfoFormSection} from "./GeneralEventInfoFormSection";
import {LocationFormSection} from "./LocationFormSection";
import {PeopleFormSection} from "./PeopleFormSection";
import React from "react";
import {FormContentGrid} from "../../../_Common/Form/FormContentGrid";

export const EventFormGrid = props => {
    let {hideEventId, ...rest} = props;

    return (
        <FormContentGrid
            left={
                <GeneralEventInfoFormSection {...props}/>
            }
            right={<>
                <LocationFormSection {...rest}/>
                <PeopleFormSection {...rest}/>
            </>}
        />
    );
};
