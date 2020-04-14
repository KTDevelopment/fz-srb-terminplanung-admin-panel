import React from "react";
import {Datagrid, DeleteButton, NumberField, ReferenceField, SimpleList, TextField} from 'react-admin';
import {ResponsiveList} from "../_Common/ResponsiveList";
import {FullMemberNameTextField} from "../_Common/MemberFullName";


export const DevicesList = props => {
    return (
        <ResponsiveList
            smallList={
                <SimpleList
                    primaryText={record => record.deviceId + ' - ' + record.registrationId}
                    secondaryText={record => record.deviceType}
                />
            }
            normalList={
                <Datagrid rowClick="show" key={"deviceId"}>
                    <NumberField source="deviceId"/>
                    <ReferenceField source="memberId" reference="members" link="show">
                        <FullMemberNameTextField/>
                    </ReferenceField>
                    <TextField source="registrationId"/>
                    <TextField source="deviceType"/>
                    <DeleteButton label=""/>
                </Datagrid>
            }
            {...props}
        />
    );
};
