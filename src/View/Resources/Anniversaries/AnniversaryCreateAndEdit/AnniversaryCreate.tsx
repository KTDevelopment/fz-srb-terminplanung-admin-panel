import React from 'react';
import {Create} from 'react-admin';
import {BasicForm} from "../../_Common/Form/BasicForm";
import {AnniversaryFormGrid} from "./Components/AnniversaryFormGrid";

export const AnniversaryCreate = props => (
    <Create {...props}>
        <BasicForm>
            <AnniversaryFormGrid hideIdInput/>
        </BasicForm>
    </Create>
);
