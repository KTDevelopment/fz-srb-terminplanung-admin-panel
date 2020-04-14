import React from 'react';
import {Create} from 'react-admin';
import {BasicForm} from "../../_Common/Form/BasicForm";
import {SectionFormGrid} from "./Components/SectionFormGrid";

export const SectionCreate = props => (
    <Create {...props}>
        <BasicForm>
            <SectionFormGrid hideIdInput/>
        </BasicForm>
    </Create>
);
