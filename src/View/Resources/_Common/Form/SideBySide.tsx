import {Box} from '@material-ui/core';
import React from "react";

export const SideBySide = props => (
    <Box display="flex">
        <Box flex={1} mr="0.5em">
            {props.children[0]}
        </Box>
        <Box flex={1} ml="0.5em">
            {props.children[1]}
        </Box>
    </Box>
);
