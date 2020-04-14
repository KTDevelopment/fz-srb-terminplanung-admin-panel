import React from "react";
import {Resource} from 'react-admin';
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import {DevicesList} from "./DevicesList";
import {DeviceShow} from "./DeviceShow";
import {DeviceCreate} from "./DeviceCreate";

export const DeviceResource = () => <Resource
    name="devices"
    icon={PhoneIcon}
    list={DevicesList}
    show={DeviceShow}
    create={DeviceCreate}
/>;
