import React from 'react';
import {Create} from 'react-admin';
import {BasicForm} from "../../_Common/Form/BasicForm";
import {RoleFormGrid} from "./Components/RoleFormGrid";

export const RoleCreate = props => (
    <Create {...props}>
        <BasicForm>
            <RoleFormGrid/>
        </BasicForm>
    </Create>
);
