import React from 'react';
import {Edit} from 'react-admin';
import {BasicForm} from "../../_Common/Form/BasicForm";
import {AnniversaryFormGrid} from "./Components/AnniversaryFormGrid";

export const AnniversaryEdit = props => (
    <Edit {...props}>
        <BasicForm>
            <AnniversaryFormGrid/>
        </BasicForm>
    </Edit>
);
