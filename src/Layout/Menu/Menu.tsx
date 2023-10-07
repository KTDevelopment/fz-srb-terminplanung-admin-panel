import { useState } from "react";
import {
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  ResourceDefinition,
  ResourceDefinitions,
  useResourceDefinitions,
  useSidebarState,
  useTranslate,
} from "react-admin";
import ExpandableMenuItem from "./ExpandableMenuItem";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import EventIcon from "@mui/icons-material/Event";
import OtherIcon from "@mui/icons-material/Layers";
import InternalIcon from "@mui/icons-material/ViewAgenda";
import { Version } from "./Version";
import { BackendInfo } from "./BackendInfo";
import { CustomRoutesDefinitions } from "../../CustomRoutes";
import { ResourceNames } from "../../Provider/APIDefinitions/apiDefinitions";

export const Menu = ({ dense, onMenuClick }: MenuProps) => {
  const [state, setState] = useState({
    menuEvents: false,
    menuMembers: false,
    menuInternal: false,
    menuOther: false,
    menuStatistics: false,
  });
  const translate = useTranslate();
  const [open] = useSidebarState();
  const resourcesDefinitions: ResourceDefinitions = useResourceDefinitions();
  const resources: ResourceDefinition[] = Object.keys(resourcesDefinitions).map(
    (name) => resourcesDefinitions[name]
  );

  const handleToggle = (menu: MenuName) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  const menuItems = getMenuItems(resources);

  return (
    <>
      <DashboardMenuItem onClick={onMenuClick} />
      {menuItems.map((item) => (
        <ExpandableMenuItem
          key={item.name}
          handleToggle={() => handleToggle(item.menuName)}
          isOpen={state[item.menuName]}
          sidebarIsOpen={open}
          name={item.name}
          icon={<item.icon />}
          dense={dense || false}
        >
          {item.children.map((r) => (
            <MenuItemLink
              key={r.name}
              to={`/${r.name}`}
              primaryText={translate(r.labelKey)}
              leftIcon={<r.icon />}
              onClick={onMenuClick}
              dense={dense}
            />
          ))}
        </ExpandableMenuItem>
      ))}
      <Version sidebarIsOpen={open} />
      <BackendInfo sidebarIsOpen={open} />
    </>
  );
};

type MenuName =
  | "menuEvents"
  | "menuMembers"
  | "menuInternal"
  | "menuOther"
  | "menuStatistics";

type MenuItem = {
  menuName: MenuName;
  name: string;
  children: MenuItemChild[];
  icon: any;
};

interface MenuItemChild extends ResourceDefinition {
  labelKey: string;
}

const getMenuItems = (resources: ResourceDefinition[]): MenuItem[] => {
  return [
    {
      menuName: "menuEvents",
      name: "menu.events",
      children: eventResources(resources),
      icon: EventIcon,
    },
    {
      menuName: "menuMembers",
      name: "menu.members",
      children: memberResources(resources),
      icon: PeopleIcon,
    },
    {
      menuName: "menuStatistics",
      name: "menu.statistics",
      children: statisticResources(resources),
      icon: AnalyticsIcon,
    },
    {
      menuName: "menuInternal",
      name: "menu.internal",
      children: internalResources(resources),
      icon: InternalIcon,
    },
    {
      menuName: "menuOther",
      name: "menu.other",
      children: CustomRoutesDefinitions,
      icon: OtherIcon,
    },
  ];
};

const statisticResources = (resources: ResourceDefinition[]) =>
  filterResources(resources, [
    ResourceNames.anniversaries,
    ResourceNames.statisticsDeletionProtocols,
    ResourceNames.statisticsEntries,
    ResourceNames.statisticsParticipations,
  ]);
const memberResources = (resources: ResourceDefinition[]) =>
  filterResources(resources, [ResourceNames.members, ResourceNames.sections]);
const eventResources = (resources: ResourceDefinition[]) =>
  filterResources(resources, [
    ResourceNames.events,
    ResourceNames.participations,
  ]);
const internalResources = (resources: ResourceDefinition[]) =>
  filterResources(resources, [
    ResourceNames.participationStates,
    ResourceNames.roles,
    ResourceNames.devices,
    ResourceNames.misc,
  ]);
const filterResources = (
  resources: ResourceDefinition[],
  resourceNames: string[]
): MenuItemChild[] =>
  resources
    .filter((r) => resourceNames.includes(r.name))
    .map((it) => ({
      ...it,
      labelKey: `resources.${it.name}.name`,
    }));
