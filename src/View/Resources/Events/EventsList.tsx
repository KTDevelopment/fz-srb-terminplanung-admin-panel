import React from "react";
import {Datagrid, DateField, Filter, SimpleList, TextField, TextInput} from 'react-admin';
import {BigTextField} from "./BigTextField";
import {DataGridActions} from "../_Common/DataGridActions";
import {ResponsiveList} from "../_Common/ResponsiveList";

const EventsFilter = (props) => (
    <Filter {...props} variant={'outlined'}>
        <TextInput source="eventName"/>
    </Filter>
);

export const EventList = props => {
    return (
        <ResponsiveList
            smallList={
                <SimpleList
                    primaryText={record => record.eventName}
                    secondaryText={record => record.summary}
                />
            }
            normalList={
                <Datagrid rowClick="show" key={"eventId"}>
                    <TextField source="eventId"/>
                    <BigTextField source="eventName"/>
                    <DateField source="startDate"/>
                    <DateField source="endDate"/>
                    <BigTextField source="summary"/>
                    <DataGridActions/>
                </Datagrid>
            }
            {...props}
            filters={<EventsFilter/>}
        />
    );
};
