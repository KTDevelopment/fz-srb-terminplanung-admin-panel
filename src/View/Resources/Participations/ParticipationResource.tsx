import React from "react";
import {Resource} from 'react-admin';
import ExtensionIcon from '@material-ui/icons/Extension';
import {ParticipationsList} from "./ParticipationsList";
import {ParticipationShow} from "./ParticipationShow";
import {ParticipationCreate} from "./ParticipationCreateAndEdit/ParticipationCreate";

export const ParticipationResource = () => <Resource
    name="participations"
    icon={ExtensionIcon}
    list={ParticipationsList}
    show={ParticipationShow}
    create={ParticipationCreate}
/>;
