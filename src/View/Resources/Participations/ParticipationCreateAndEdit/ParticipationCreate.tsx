import React from 'react';
import {Create} from 'react-admin';
import {BasicForm} from "../../_Common/Form/BasicForm";
import {ParticipationFormGrid} from "./Components/ParticipationFormGrid";

export const ParticipationCreate = props => (
    <Create {...props}>
        <BasicForm>
            <ParticipationFormGrid hideIdInput/>
        </BasicForm>
    </Create>
);
