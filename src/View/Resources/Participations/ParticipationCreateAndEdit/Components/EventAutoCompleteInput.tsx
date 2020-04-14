import React from "react";
import {AutocompleteInput, ReferenceInput} from 'react-admin';

export const EventAutoCompleteInput = props => {
    return <ReferenceInput source="eventId" reference="events" filterToQuery={searchText => {
        return searchText ? {
            eventName: searchText
        } : null;
    }} {...props}>
        <AutocompleteInput optionText="eventName" optionValue="eventId"/>
    </ReferenceInput>
};
