import { Admin, CustomRoutes } from "react-admin";
import dataProvider from "./Provider/DataProvider";
import { EventResource } from "./Resources/Events/EventResource";
import { MemberResource } from "./Resources/Members/MemberResource";
import { SectionResource } from "./Resources/Sections/SectionResource";
import { RoleResource } from "./Resources/Roles/RoleResource";
import { DeviceResource } from "./Resources/Devices/DeviceResource";
import { ParticipationResource } from "./Resources/Participations/ParticipationResource";
import { AnniversaryResource } from "./Resources/Statistics/Anniversaries/AnniversaryResource";
import { ParticipationStateResource } from "./Resources/ParticipationStates/ParticipationStateResource";
import { MiscResource } from "./Resources/Misc/MiscResource";
import { LoginPage } from "./Auth/MyLoginPage";
import { authProvider } from "./Provider/AuthProvider";
import { i18nProvider } from "./i18n/i18nProvider";
import { CustomLayout } from "./Layout/Layout";
import { MyCustomRoutes } from "./CustomRoutes";
import { AppTheme } from "./Theme/AppTheme";
import { DeletionProtocolResource } from "./Resources/Statistics/DeletionProtocol/DeletionProtocolResource";
import { StatisticsEntriesResource } from "./Resources/Statistics/StatisticsEntries/StatisticsEntriesResource";
import { StatisticsParticipationsResource } from "./Resources/Statistics/StatisticsParticipations/StatisticsParticipationsResource";
import { Dashboard } from "./Dashboard/Dashboard";

export const App = () => (
  <Admin
    dashboard={Dashboard}
    theme={AppTheme}
    layout={CustomLayout}
    title="Fanfarenzug Stausberg Terminplanung"
    dataProvider={dataProvider}
    loginPage={LoginPage}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    disableTelemetry
  >
    {EventResource()}
    {MemberResource()}
    {SectionResource()}
    {RoleResource()}
    {DeviceResource()}
    {ParticipationResource()}
    {AnniversaryResource()}
    {DeletionProtocolResource()}
    {StatisticsEntriesResource()}
    {StatisticsParticipationsResource()}
    {ParticipationStateResource()}
    {MiscResource()}
    <CustomRoutes noLayout>{MyCustomRoutes}</CustomRoutes>
  </Admin>
);
