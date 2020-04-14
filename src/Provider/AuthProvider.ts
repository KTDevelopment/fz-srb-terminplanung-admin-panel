// in src/authProvider.js

import {config} from "../Config/config";
import JwtDecode from "jwt-decode";
import httpClient from "./HttpClient";
import moment from "moment";
import {UrlBuilder} from "../Utils/UrlBuilder";

const loginUrl = config.apiBasePath + '/auth/login';
const memberUrl = config.apiBasePath + '/members/';

export const ACCESS_TOKEN_KEY = 'accessToken';
export const MEMBER_DATA_KEY = 'memberData';

const AuthProvider = {
    login: async ({username, password}) => {
        const {json} = await httpClient(loginUrl, {
            method: 'POST',
            body: JSON.stringify({email: username, password}),
            headers: new Headers({'Content-Type': 'application/json'}),
        });
        sessionStorage.setItem(ACCESS_TOKEN_KEY, json.accessToken);
        await loadMemberData(json.accessToken);
        if (!checkIfMemberIsAdmin()) {
            clearLogin();
            throw new Error('error.login.noAdmin')
        }
        return;
    },
    logout: () => {
        clearLogin();
        return Promise.resolve();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            sessionStorage.removeItem(ACCESS_TOKEN_KEY);
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        const token = sessionStorage.getItem(ACCESS_TOKEN_KEY);
        if (!token) return Promise.reject();
        if (isTokenExpired(token)) return Promise.reject();
        return Promise.resolve();
    },
    getPermissions: () => Promise.resolve(),
};

export async function resetPassword(email: string, passwordResetToken: string, newPassword: string) {
    return await httpClient(new UrlBuilder('/auth/reset-password')
            .addPath(email)
            .build(),
        {
            method: 'POST',
            body: JSON.stringify({
                passwordResetToken,
                newPassword
            }),
            headers: new Headers({'Content-Type': 'application/json'}),
        })
}

async function loadMemberData(accessToken: string) {
    const memberId = getMemberIdFromToken(accessToken);
    const {json} = await httpClient(memberUrl + memberId);
    sessionStorage.setItem(MEMBER_DATA_KEY, JSON.stringify(json));
}

function getMemberIdFromToken(accessToken: string) {
    const decoded = JwtDecode<any>(accessToken);
    return decoded.sub;
}

function isTokenExpired(accessToken: string) {
    try {
        const decoded = JwtDecode<any>(accessToken);
        if (!decoded.exp || !decoded.iat) return true;
        const now = moment();
        const expiresAt = moment(decoded.exp * 1000);
        return now.isAfter(expiresAt);
    } catch (e) {
        return true;
    }
}

function clearLogin() {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(MEMBER_DATA_KEY);
}

function checkIfMemberIsAdmin() {
    const memberString = sessionStorage.getItem(MEMBER_DATA_KEY);
    if (!memberString) return false;
    return memberIsAdmin(JSON.parse(memberString));
}

function memberIsAdmin(memberData: MemberData): boolean {
    return memberData.roles.some(role => role.roleId === 0);
}

interface MemberData {
    roles: { roleId: number }[]
}

export default AuthProvider;
