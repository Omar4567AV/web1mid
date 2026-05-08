export type LoginCredentials = {
    email: string;
    password: string;
};

export type AuthUser = {
    id: string;
    email: string;
    name: string;
};

export type AuthState = {
    user: AuthUser | null;
    isAuthenticated: boolean;
};