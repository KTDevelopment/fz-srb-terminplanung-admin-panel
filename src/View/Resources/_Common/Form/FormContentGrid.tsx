import React, {CElement} from "react";
import {Grid} from '@material-ui/core';

type Props = {
    left: CElement<any, any>;
    right: CElement<any, any>;
}

export const FormContentGrid = (props: Props) => {
    let {left, right} = props;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
                {left}
            </Grid>
            <Grid item xs={12} lg={6}>
                {right}
            </Grid>
        </Grid>
    );
};
