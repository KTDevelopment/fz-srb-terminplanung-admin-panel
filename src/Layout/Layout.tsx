import { Layout } from "react-admin";
import { Menu } from "./Menu/Menu";
import { LayoutProps } from "ra-ui-materialui/src/layout/Layout";

export const CustomLayout = (props: LayoutProps) => (
  <Layout {...props} menu={Menu} />
);
