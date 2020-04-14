import React from 'react';
import {Create} from 'react-admin';
import {EventFormGrid} from "./Components/EventFormGrid";
import {BasicForm} from "../../_Common/Form/BasicForm";

export const EventCreate = props => (
    <Create {...props}>
        <BasicForm>
            <EventFormGrid hideEventId/>
        </BasicForm>
    </Create>
);
