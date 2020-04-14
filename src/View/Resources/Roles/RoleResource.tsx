import React from "react";
import {Resource} from 'react-admin';
import ClassIcon from '@material-ui/icons/Class';
import {RolesList} from "./RolesList";
import {RoleShow} from "./RoleShow";
import {RoleEdit} from "./RoleCreateAndEdit/RoleEdit";
import {RoleCreate} from "./RoleCreateAndEdit/RoleCreate";

export const RoleResource = () => <Resource
    name="roles"
    icon={ClassIcon}
    list={RolesList}
    show={RoleShow}
    edit={RoleEdit}
    create={RoleCreate}
/>;
