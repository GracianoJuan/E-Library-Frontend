import { apiRequest, clearCsrfTokenCache } from "./ApiService";

type AuthPayload = {
	name: string;
	password: string;
};

type AuthUser = {
	id: number;
	name: string;
};

export async function register(payload: AuthPayload): Promise<AuthUser> {
	return apiRequest<AuthUser>("/auth/register", {
		method: "POST",
		body: payload,
		withCsrf: true,
	});
}

export async function login(payload: AuthPayload): Promise<AuthUser> {
	return apiRequest<AuthUser>("/auth/login", {
		method: "POST",
		body: payload,
		withCsrf: true,
	});
}

export async function logout(): Promise<void> {
	await apiRequest<void>("/auth/logout", {
		method: "POST",
		withCsrf: true,
	});
	clearCsrfTokenCache();
}

export async function me(): Promise<AuthUser> {
	return apiRequest<AuthUser>("/auth/me");
}
