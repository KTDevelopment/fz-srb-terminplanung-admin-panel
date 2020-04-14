import React from 'react';
import {Edit} from 'react-admin';
import {BasicForm} from "../../_Common/Form/BasicForm";
import {MemberFormGrid} from "./Components/MemberFormGrid";

export const MemberEdit = props => (
    <Edit {...props}>
        <BasicForm>
            <MemberFormGrid/>
        </BasicForm>
    </Edit>
);
