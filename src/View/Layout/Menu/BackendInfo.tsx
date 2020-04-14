import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {config} from "../../../Config/config";


export const BackendInfo = (props) => {
    if (!props.sidebarIsOpen) return null;
    const classes = getClasses();
    return <div className={classes.Info}>
        {config.apiBasePath}
    </div>
};

const getClasses = makeStyles({
    Info: {
        padding: 20,
        paddingBottom: 0,
        fontWeight: 100,
        fontSize: 10
    },
});
