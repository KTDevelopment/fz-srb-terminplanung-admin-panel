import { FC, Fragment, ReactElement } from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import Tooltip from "@mui/material/Tooltip";
import { useTranslate } from "react-admin";

const styles = {
  icon: { minWidth: 40 },
  sidebarIsOpen: {
    paddingLeft: 25,
    transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
  },
  sidebarIsClosed: {
    paddingLeft: 0,
    transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
  },
};

interface Props {
  dense: boolean;
  handleToggle: () => void;
  icon: ReactElement;
  isOpen: boolean;
  name: string;
  sidebarIsOpen: boolean;
  children: ReactElement[];
}

const ExpandableMenuItem: FC<Props> = ({
  handleToggle,
  sidebarIsOpen,
  isOpen,
  name,
  icon,
  children,
  dense,
}) => {
  const translate = useTranslate();
  //const classes = useStyles();

  const header = (
    <MenuItem dense={dense} onClick={handleToggle}>
      <ListItemIcon style={styles.icon}>
        {isOpen ? <ExpandMore /> : icon}
      </ListItemIcon>
      <Typography variant="inherit" color="textSecondary">
        {translate(name)}
      </Typography>
    </MenuItem>
  );

  return (
    <Fragment>
      {sidebarIsOpen || isOpen ? (
        header
      ) : (
        <Tooltip title={translate(name)} placement="right">
          {header}
        </Tooltip>
      )}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List
          dense={dense}
          component="div"
          disablePadding
          style={sidebarIsOpen ? styles.sidebarIsOpen : styles.sidebarIsClosed}
        >
          {children}
        </List>
        <Divider />
      </Collapse>
    </Fragment>
  );
};

export default ExpandableMenuItem;
