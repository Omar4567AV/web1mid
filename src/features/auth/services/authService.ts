import type { AuthUser, LoginCredentials } from "../types/auth.types";

const AUTH_STORAGE_KEY = "auth_user";

export const login = async (
    credentials: LoginCredentials
): Promise<AuthUser> => {
    const { email, password } = credentials;

    if (!email.trim() || !password.trim()) {
        throw new Error("Email and password are required.");
    }

    const fakeUser: AuthUser = {
        id: crypto.randomUUID(),
        email,
        name: "Fake User",
    };

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(fakeUser));

    return fakeUser;
};

export const logout = (): void => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
};

export const getCurrentUser = (): AuthUser | null => {
    const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);

    if (!storedUser) {
        return null;
    }

    try {
        return JSON.parse(storedUser) as AuthUser;
    } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        return null;
    }
};

export const isAuthenticated = (): boolean => {
    return getCurrentUser() !== null;
};