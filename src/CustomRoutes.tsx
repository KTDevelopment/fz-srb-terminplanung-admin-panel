import { Route } from "react-router-dom";
import PolicyIcon from "@mui/icons-material/Policy";
import GavelIcon from "@mui/icons-material/Gavel";
import SecurityIcon from "@mui/icons-material/Security";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { PasswordResetPage } from "./Auth/PasswordReset";
import { Contact } from "./Contact/Contact";
import { PrivacyPolicy } from "./StaticPages/PrivacyPolicy";
import { TermsAndConditions } from "./StaticPages/TermsAndConditions";
import { TermsAndConditionsAKWedding } from "./StaticPages/TermsAndConditionsAKWedding";
import {TermsAndConditionsBeatCoach} from "./StaticPages/TermsAndConditionsBeatCoach";

export interface CustomRoute {
  name: string;
  icon: any;
  component: any;
  labelKey: string;
}

export const CustomRoutesDefinitions: CustomRoute[] = [
  {
    name: "privacyPolicy",
    icon: PolicyIcon,
    component: <PrivacyPolicy />,
    labelKey: "customRoutes.privacyPolicy.name",
  },
  {
    name: "termsAndConditions",
    icon: GavelIcon,
    component: <TermsAndConditions />,
    labelKey: "customRoutes.termsAndConditions.name",
  },
  {
    name: "termsAndConditionsAkWedding",
    icon: GavelIcon,
    component: <TermsAndConditionsAKWedding />,
    labelKey: "customRoutes.termsAndConditionsAkWedding.name",
  },
    {
        name: "termsAndConditionsBeatCoach",
        icon: GavelIcon,
        component: <TermsAndConditionsBeatCoach />,
        labelKey: "customRoutes.termsAndConditionsBeatCoach.name",
    },
  {
    name: "passwordReset",
    icon: SecurityIcon,
    component: <PasswordResetPage />,
    labelKey: "customRoutes.passwordReset.name",
  },
  {
    name: "contact",
    icon: ContactMailIcon,
    component: <Contact />,
    labelKey: "customRoutes.contact.name",
  },
];

export const MyCustomRoutes = CustomRoutesDefinitions.map((route) => (
  <Route key={route.name} path={`/${route.name}`} element={route.component} />
));
