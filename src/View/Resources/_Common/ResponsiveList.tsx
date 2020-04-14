import React from "react";
import {useMediaQuery} from '@material-ui/core';
import {List} from 'react-admin';

type Props = {
    normalList: any;
    smallList: any;
}

export const ResponsiveList = (props: Props) => {
    // @ts-ignore
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
    const {normalList, smallList, ...rest} = props;

    return <List {...rest}>
        {isSmall
            ? React.cloneElement(smallList)
            : React.cloneElement(normalList)}
    </List>
};
