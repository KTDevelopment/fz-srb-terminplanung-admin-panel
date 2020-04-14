import React from "react";
import {Datagrid, NumberField, SimpleList, TextField} from 'react-admin';
import {DataGridActions} from "../_Common/DataGridActions";
import {ResponsiveList} from "../_Common/ResponsiveList";

export const RolesList = props => {
    return (
        <ResponsiveList
            smallList={
                <SimpleList
                    primaryText={record => record.roleId + ' - ' + record.roleName}
                />
            }
            normalList={
                <Datagrid rowClick="show" key={"roleId"}>
                    <NumberField source="roleId"/>
                    <TextField source="roleName"/>
                    <DataGridActions/>
                </Datagrid>
            }
            {...props}
        />
    );
};
