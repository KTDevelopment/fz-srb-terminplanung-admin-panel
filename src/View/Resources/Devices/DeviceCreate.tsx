import React from "react";
import {BasicForm} from "../_Common/Form/BasicForm";
import {Create} from 'react-admin';
import {DeviceFormGrid} from "./Components/DeviceFormGrid";

export const DeviceCreate = props => (
    <Create {...props}>
        <BasicForm>
            <DeviceFormGrid/>
        </BasicForm>
    </Create>
);
