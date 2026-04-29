const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

type RequestOptions = {
	method?: string;
	body?: unknown;
	withCsrf?: boolean;
};

let csrfTokenCache: string | null; 

async function ensureCsrfToken(): Promise<string> {
	if (csrfTokenCache) {
		return csrfTokenCache;
	}

	const response = await fetch(`${API_BASE_URL}/auth/csrf`, {
		method: "GET",
		credentials: "include",
	});

	if (!response.ok) {
		throw new Error("Failed to initialize CSRF token");
	}

	const data = await response.json();
	csrfTokenCache = data.csrfToken;

	return csrfTokenCache; // error because it isnt asignable to null
}

export async function apiRequest<T>(
	path: string,
	options: RequestOptions = {}
): Promise<T> {
	const method = options.method ?? "GET";
	const headers: HeadersInit = {
		"Content-Type": "application/json",
	};

	if (options.withCsrf) {
		const csrfToken = await ensureCsrfToken();
		headers["X-CSRF-Token"] = csrfToken;
	}

	const response = await fetch(`${API_BASE_URL}${path}`, {
		method,
		headers,
		credentials: "include",
		body: options.body ? JSON.stringify(options.body) : undefined,
	});

	if (!response.ok) {
		let message = "Request failed";
		try {
			const errorBody = await response.json();
			message = errorBody.detail ?? message;
		} catch {
			// Keep default message when body is not json.
		}
		throw new Error(message);
	}

	if (response.status === 204) {
		return undefined as T;
	}

	return (await response.json()) as T;
}

export function clearCsrfTokenCache() {
	csrfTokenCache = null;
}
