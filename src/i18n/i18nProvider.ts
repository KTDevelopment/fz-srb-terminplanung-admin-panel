import polyglotI18nProvider from "ra-i18n-polyglot";
import messages from "./ger";

export const i18nProvider = polyglotI18nProvider(() => messages, "de");
