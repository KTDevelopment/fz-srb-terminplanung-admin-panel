import { FC } from "react";
import { API_BASE_URL } from "../../Provider/APIDefinitions/UrlBuilder";

const styles = {
  Info: {
    padding: 20,
    paddingBottom: 0,
    fontWeight: 100,
    fontSize: 10,
    width: 200,
  },
};

type Props = {
  sidebarIsOpen: boolean;
};

export const BackendInfo: FC<Props> = (props) => {
  if (!props.sidebarIsOpen) return null;
  return <div style={styles.Info}>{API_BASE_URL}</div>;
};
