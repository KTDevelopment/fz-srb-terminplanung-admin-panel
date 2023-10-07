import { Loading, useGetOne } from "react-admin";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ErrorIcon from "@mui/icons-material/Error";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const MiscList = () => {
  const { data, isLoading, error } = useGetOne(ResourceNames.misc, {
    id: "fzSrbAppStoreLinks",
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorIcon />;
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
