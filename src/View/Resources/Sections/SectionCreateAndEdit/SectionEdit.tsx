import React from 'react';
import {Edit} from 'react-admin';
import {BasicForm} from "../../_Common/Form/BasicForm";
import {SectionFormGrid} from "./Components/SectionFormGrid";

export const SectionEdit = props => (
    <Edit {...props}>
        <BasicForm>
            <SectionFormGrid/>
        </BasicForm>
    </Edit>
);
