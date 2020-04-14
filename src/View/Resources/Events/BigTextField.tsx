import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import {TextField} from 'react-admin';

export const BigTextField = props => {
    const classes = getClasses();
    const {source, record = {}} = props;
    return <Tooltip title={record[source]} enterDelay={500}>
        <TextField className={classes.text} {...props}/>
    </Tooltip>;
};

const getClasses = makeStyles({
    text: {
        display: '-webkit-box',
        "-webkit-line-clamp": 3,
        "-webkit-box-orient": 'vertical',
        overflow: 'hidden',
    },
});
