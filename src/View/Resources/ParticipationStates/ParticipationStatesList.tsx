import React from "react";
import {Datagrid, NumberField, SimpleList, TextField} from 'react-admin';
import {DataGridActions} from "../_Common/DataGridActions";
import {ResponsiveList} from "../_Common/ResponsiveList";

export const ParticipationStatesList = props => {
    return (
        <ResponsiveList
            smallList={
                <SimpleList
                    primaryText={record => record.stateId + ' - ' + record.stateName}
                />
            }
            normalList={
                <Datagrid rowClick="show" key={"stateId"}>
                    <NumberField source="stateId"/>
                    <TextField source="stateName"/>
                    <DataGridActions/>
                </Datagrid>
            }
            {...props}
        />
    );
};
