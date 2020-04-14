import React from 'react';
import {Edit} from 'react-admin';
import {BasicForm} from "../../_Common/Form/BasicForm";
import {RoleFormGrid} from "./Components/RoleFormGrid";

export const RoleEdit = props => (
    <Edit {...props}>
        <BasicForm>
            <RoleFormGrid disableIdInput/>
        </BasicForm>
    </Edit>
);
