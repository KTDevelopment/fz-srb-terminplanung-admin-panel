import {ACCESS_TOKEN_KEY} from "./AuthProvider";
import {fetchUtils} from 'react-admin';

const httpClient = (url, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = sessionStorage.getItem(ACCESS_TOKEN_KEY);
    if (token) {
        options.headers.set('Authorization', `Bearer ${token}`);
    }

    return fetchUtils.fetchJson(url, options);
};

export default httpClient
