import React from "react";
import {AutocompleteInput, ReferenceInput} from 'react-admin';
import {fullNameRender} from "../../../_Common/MemberFullName";

export const MemberAutoCompleteInput = props => {
    return <ReferenceInput  source="memberId" reference="members" filterToQuery={searchText => {
        if (!searchText) return null;
        const split = searchText.split(' ');

        if(split[1] !== undefined && split[1].trim() !== "") {
            return {
                firstName: split[0],
                lastName: split[1]
            }
        }

        return {
            firstName: split[0]
        }
    }} {...props}>
        <AutocompleteInput optionText={fullNameRender} optionValue="memberId"/>
    </ReferenceInput>
};
