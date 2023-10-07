import { FC } from "react";

const styles = {
  Version: {
    padding: 20,
    paddingBottom: 0,
    fontWeight: 100,
    fontSize: 10,
  },
};

type Props = {
  sidebarIsOpen: boolean;
};
export const Version: FC<Props> = (props) => {
  if (!props.sidebarIsOpen) return null;
  return <div style={styles.Version}>V{import.meta.env.VITE_APP_VERSION}</div>;
};
