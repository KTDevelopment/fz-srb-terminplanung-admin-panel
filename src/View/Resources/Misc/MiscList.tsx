import React from "react";
import {Error, Loading, useQuery} from 'react-admin';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const MiscList = () => {
    const { data, loading, error } = useQuery({
        type: 'getOne',
        resource: 'misc',
        payload: { id: 'fzSrbAppStoreLinks' }
    });

    if (loading) return <Loading />;
    if (error) return <Error error={error}/>;
    if (!data) return null;

    return (
        <Card>
            <CardContent>
                <CardHeader title="AppStoreLinks" />
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem>
                        <ListItemText primary="iOS" secondary={data.iosLink} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Android" secondary={data.androidLink} />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};
