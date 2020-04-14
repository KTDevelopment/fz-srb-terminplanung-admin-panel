import React from 'react';
import {Edit} from 'react-admin';
import {EventFormGrid} from "./Components/EventFormGrid";
import {BasicForm} from "../../_Common/Form/BasicForm";

export const EventEdit = props => (
    <Edit {...props}>
        <BasicForm>
            <EventFormGrid/>
        </BasicForm>
    </Edit>
);
