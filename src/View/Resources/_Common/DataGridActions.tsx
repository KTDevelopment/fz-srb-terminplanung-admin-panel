import React from "react";
import {DeleteButton, EditButton} from 'react-admin';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    dataGridActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
}));

export const DataGridActions = props => {
    const classes = useStyles();
    return (
        <div className={classes.dataGridActions}>
            <EditButton label="" {...props}/>
            <DeleteButton label="" {...props}/>
        </div>
    );
};
