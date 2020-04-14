import React from "react";
import {Datagrid, NumberField, SimpleList, TextField} from 'react-admin';
import {DataGridActions} from "../_Common/DataGridActions";
import {ResponsiveList} from "../_Common/ResponsiveList";


export const SectionsList = props => {
    return (
        <ResponsiveList
            smallList={
                <SimpleList
                    primaryText={record => record.sectionId + ' - ' + record.sectionName}
                />
            }
            normalList={
                <Datagrid rowClick="show" key={"sectionId"}>
                    <NumberField source="sectionId"/>
                    <TextField source="sectionName"/>
                    <DataGridActions/>
                </Datagrid>
            }
            {...props}
        />
    );
};
