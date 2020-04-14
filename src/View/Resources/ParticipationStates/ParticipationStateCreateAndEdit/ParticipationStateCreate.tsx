import React from 'react';
import {Create} from 'react-admin';
import {BasicForm} from "../../_Common/Form/BasicForm";
import {ParticipationStateFormGrid} from "./Components/ParticipationStateFormGrid";

export const ParticipationStateCreate = props => (
    <Create {...props}>
        <BasicForm>
            <ParticipationStateFormGrid/>
        </BasicForm>
    </Create>
);
