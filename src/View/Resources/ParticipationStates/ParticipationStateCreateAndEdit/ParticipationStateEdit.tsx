import React from 'react';
import {Edit} from 'react-admin';
import {BasicForm} from "../../_Common/Form/BasicForm";
import {ParticipationStateFormGrid} from "./Components/ParticipationStateFormGrid";

export const ParticipationStateEdit = props => (
    <Edit {...props}>
        <BasicForm>
            <ParticipationStateFormGrid disableIdInput/>
        </BasicForm>
    </Edit>
);
