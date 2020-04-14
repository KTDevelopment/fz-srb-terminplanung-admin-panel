import React from 'react';
// @ts-ignore
import {Admin} from 'react-admin';
import DataProvider from "../../Provider/DataProvider";
import {EventResource} from "../Resources/Events/EventResource";
import {i18nProvider} from "../../i18n/i18nProvider";
import AuthProvider from "../../Provider/AuthProvider";
import AppTheme from "../../Theme/AppTheme";
import MyLoginPage from "../Auth/Login/MyLoginPage";
import CustomRoutes from "./CustomRoutes";
import {MemberResource} from "../Resources/Members/MemberResource";
import {SectionResource} from "../Resources/Sections/SectionResource";
import {RoleResource} from "../Resources/Roles/RoleResource";
import {DeviceResource} from "../Resources/Devices/DeviceResource";
import Dashboard from "../Dashboard/Dashboard";
import {AnniversaryResource} from "../Resources/Anniversaries/AnniversaryResource";
import {ParticipationStateResource} from "../Resources/ParticipationStates/ParticipationStateResource";
import {ParticipationResource} from "../Resources/Participations/ParticipationResource";
import MyLayout from "../Layout/Layout";
import {MiscResource} from "../Resources/Misc/MiscResource";

const App = () => (
    <Admin
        theme={AppTheme}
        layout={MyLayout}
        title="Fanfarenzug Stausberg Terminplanung"
        dashboard={Dashboard}
        dataProvider={DataProvider}
        authProvider={AuthProvider}
        i18nProvider={i18nProvider}
        loginPage={MyLoginPage}
        customRoutes={CustomRoutes}
    >
        {EventResource()}
        {MemberResource()}
        {SectionResource()}
        {RoleResource()}
        {DeviceResource()}
        {ParticipationResource()}
        {AnniversaryResource()}
        {ParticipationStateResource()}
        {MiscResource()}
    </Admin>
);

export default App;
