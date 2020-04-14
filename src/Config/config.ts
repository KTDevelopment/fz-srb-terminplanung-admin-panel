// @ts-ignore see config-overrides.js
import Config from 'Config';

export interface AppConfig {
    apiBasePath: string
}

export const config: AppConfig = Config;
