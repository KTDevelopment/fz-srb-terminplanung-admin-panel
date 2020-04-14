import React from "react";
import {AutocompleteInput, ReferenceInput} from 'react-admin';

export const ParticipationStateAutocompleteInput = props => {
    console.log('foo: ', props);
    return <ReferenceInput source="stateId" reference="participation-states" filterToQuery={searchText => {
        return searchText ? {
            stateName: searchText
        } : null;
    }} {...props}>
        <AutocompleteInput optionText="stateName" optionValue="stateId"/>
    </ReferenceInput>
};
