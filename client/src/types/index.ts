import type { ReactNode } from 'react'

export interface AppLayoutProps {
    children: ReactNode;
}


type AuthUser = {
    id: string;
    email: string;
    username: string;
    role: string;
};


export type AuthState = {
    user: AuthUser | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (
        email: string,
        password: string,
        username: string,
    ) => Promise<void>;
    logout: () => Promise<void>;
    clearError: () => void;
};

