// in src/authProvider.js

import JwtDecode from "jwt-decode";
import { httpCall } from "./httpCall";
import { DateTime } from "luxon";
import { HttpError } from "react-admin";
import { API_URLS } from "./APIDefinitions/apiDefinitions";

export const ACCESS_TOKEN_KEY = "accessToken";
export const MEMBER_DATA_KEY = "memberData";

interface LoginParams {
  username: string;
  password: string;
}

export const authProvider = {
  login: async ({ username, password }: LoginParams) => {
    const { json } = await httpCall(API_URLS.auth.login, {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    sessionStorage.setItem(ACCESS_TOKEN_KEY, json.accessToken);
    await loadMemberData(json.accessToken);
    if (!checkIfMemberIsAdmin()) {
      clearLogin();
      throw new Error("error.login.noAdmin");
    }
    return;
  },
  logout: () => {
    clearLogin();
    return Promise.resolve();
  },
  checkError: (error: HttpError) => {
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

export async function resetPassword(
  email: string,
  passwordResetToken: string,
  newPassword: string
) {
  return await httpCall(API_URLS.auth.resetPassword(email), {
    method: "POST",
    body: JSON.stringify({
      passwordResetToken,
      newPassword,
    }),
    headers: new Headers({ "Content-Type": "application/json" }),
  });
}

async function loadMemberData(accessToken: string) {
  const memberId = getMemberIdFromToken(accessToken);
  const { json } = await httpCall(API_URLS.member.byId(memberId));
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
    const now = DateTime.now();
    const expiresAt = DateTime.fromMillis(decoded.exp * 1000);
    return now > expiresAt;
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
  return memberData.roles.some((role) => role.roleId === 0);
}

interface MemberData {
  roles: { roleId: number }[];
}
