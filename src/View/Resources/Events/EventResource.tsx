import React from "react";
import {EventList} from "./EventsList";
import {EventEdit} from "./EventCreateAndEdit/EventEdit";
import {Resource} from 'react-admin';
import {EventShow} from "./EventShow";
import {EventCreate} from "./EventCreateAndEdit/EventCreate";
import EventIcon from '@material-ui/icons/Event';

export const EventResource = () => <Resource
    name="events"
    icon={EventIcon}
    list={EventList}
    show={EventShow}
    edit={EventEdit}
    create={EventCreate}
/>;
