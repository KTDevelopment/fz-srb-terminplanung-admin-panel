import React from 'react';
import {Route} from 'react-router-dom';
import PrivacyPolicy from "../StaticPages/PrivacyPolicy";
import TermsAndConditions from "../StaticPages/TermsAndConditions";
import PasswordReset from "../Auth/PasswordReset/PasswordReset";
import Contact from "../Contact/Contact";
import PolicyIcon from '@material-ui/icons/Policy';
import GavelIcon from '@material-ui/icons/Gavel';
import SecurityIcon from '@material-ui/icons/Security';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export interface CustomRoute {
    name: string,
    icon: any,
    component: any,
    noLayout: boolean,
    isCustomRoute: boolean;
}

export const CustomRoutesDefinitions: CustomRoute[] = [
    {
        name: 'privacyPolicy',
        icon: PolicyIcon,
        component: PrivacyPolicy,
        noLayout: true,
        isCustomRoute: true,
    },
    {
        name: 'termsAndConditions',
        icon: GavelIcon,
        component: TermsAndConditions,
        noLayout: true,
        isCustomRoute: true,
    },
    {
        name: 'passwordReset',
        icon: SecurityIcon,
        component: PasswordReset,
        noLayout: true,
        isCustomRoute: true,
    },
    {
        name: 'contact',
        icon: ContactMailIcon,
        component: Contact,
        noLayout: true,
        isCustomRoute: true,
    }
];

export default CustomRoutesDefinitions.map(route => <Route excat path={`/${route.name}`} component={route.component} noLayout={route.noLayout} />);
