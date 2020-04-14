import React from "react";
import {Resource} from 'react-admin';
import MiscIcon from '@material-ui/icons/ViewWeek';
import {MiscList} from "./MiscList";

export const MiscResource = () => <Resource
    name="misc"
    icon={MiscIcon}
    list={MiscList}
/>;
