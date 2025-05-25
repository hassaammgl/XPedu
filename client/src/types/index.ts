import type { ReactNode } from 'react'

export interface AppLayoutProps {
    children: ReactNode;
}


type AuthUser = {
    _id: string;
    name: string;
    email: string;
    rank: string;
    level: number;
    xp: number;
    mana: number;
    activeShadows: number;
    agility: number;
    strength: number;
    dailyQuestsCompleted: number;
    role: string
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
    checkIsAuthenticated: () => Promise<void>;
    clearError: () => void;
};

