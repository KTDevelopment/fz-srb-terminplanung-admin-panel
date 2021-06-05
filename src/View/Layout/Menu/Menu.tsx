import React, {useState} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import inflection from 'inflection';
import {useMediaQuery} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import {DashboardMenuItem, getResources, MenuItemLink, useTranslate} from 'react-admin';
import {CustomRoute, CustomRoutesDefinitions} from "../../App/CustomRoutes";
import ExpandableMenuItem from "./ExpandableMenuItem";
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';
import OtherIcon from '@material-ui/icons/Layers';
import InternalIcon from '@material-ui/icons/ViewAgenda';
import {Version} from "./Version";
import {BackendInfo} from "./BackendInfo";

const Menu = ({
                  dense,
                  onMenuClick,
                  logout
              }) => {
    const [state, setState] = useState({
        menuEvents: false,
        menuMembers: false,
        menuInternal: false,
        menuOther: false
    });
    const translate = useTranslate();
    //@ts-ignore
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    // @ts-ignore
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources, shallowEqual);
    // @ts-ignore
    useSelector(state => state.router.location.pathname); // used to force redraw on navigation

    const handleToggle = (menu: MenuName) => {
        setState(state => ({...state, [menu]: !state[menu]}));
    };

    const menuItems = getMenuItems(resources);

    return (
        <>
            <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open}/>
            {menuItems.map(item => <ExpandableMenuItem
                key={item.name}
                handleToggle={() => handleToggle(item.menuName)}
                isOpen={state[item.menuName]}
                sidebarIsOpen={open}
                name={item.name}
                icon={<item.icon/>}
                dense={dense}
            >
                {item.children.map(r => <MenuItemLink
                    key={r.name}
                    to={`/${r.name}`}
                    primaryText={r.isCustomRoute ?
                        translatedCustomRouteName(
                            r,
                            translate
                        ) : translatedResourceName(
                            r,
                            translate
                        )}
                    leftIcon={<r.icon/>}
                    onClick={onMenuClick}
                    dense={dense}
                    sidebarIsOpen={open}
                />)}
            </ExpandableMenuItem>)}
            {isXSmall && logout}
            <Version
                sidebarIsOpen={open}
            />
            <BackendInfo
                sidebarIsOpen={open}
            />
        </>
    );
};

export default withRouter(Menu);

type MenuName = 'menuEvents' | 'menuMembers' | 'menuInternal' | 'menuOther';

type MenuItem = {
    menuName: MenuName;
    name: string;
    children: any;
    icon: any;
}

const getMenuItems = (resources): MenuItem[] => {
    return [
        {
            menuName: "menuEvents",
            name: 'menu.events',
            children: eventResources(resources),
            icon: EventIcon
        },
        {
            menuName: "menuMembers",
            name: 'menu.members',
            children: memberResources(resources),
            icon: PeopleIcon
        },
        {
            menuName: "menuInternal",
            name: 'menu.internal',
            children: internalResources(resources),
            icon: InternalIcon
        },
        {
            menuName: "menuOther",
            name: 'menu.other',
            children: CustomRoutesDefinitions,
            icon: OtherIcon
        },
    ]
};

const memberResources = resources => filterResources(resources, ['members', 'sections']);
const eventResources = resources => filterResources(resources, ['events', 'participations', 'anniversaries']);
const internalResources = resources => filterResources(resources, ['participation-states', 'roles', 'devices', 'misc']);
const filterResources = (resources, resourceNames: string[]) => resources.filter(r => resourceNames.includes(r.name));


const translatedResourceName = (resource, translate) =>
    translate(`resources.${resource.name}.name`, {
        smart_count: 2,
        _:
            resource.options && resource.options.label
                ? translate(resource.options.label, {
                    smart_count: 2,
                    _: resource.options.label,
                })
                : inflection.humanize(inflection.pluralize(resource.name)),
    });

const translatedCustomRouteName = (customRoute: CustomRoute, translate) =>
    translate(`customRoutes.${customRoute.name}.name`, {
        smart_count: 2,
        _: inflection.humanize(inflection.pluralize(customRoute.name)),
    });
