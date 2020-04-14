import React from "react";
import packageJson from '../../../package.alias.json';
import {makeStyles} from '@material-ui/core/styles';

export const Version = (props) => {
    if (!props.sidebarIsOpen) return null;
    const classes = getClasses();
    return <div className={classes.Version}>
        V{packageJson.version}
    </div>
};

const getClasses = makeStyles({
    Version: {
        padding: 20,
        paddingBottom: 0,
        fontWeight: 100,
        fontSize: 10
    },
});
