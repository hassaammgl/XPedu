import { redirect } from "react-router"
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import ProfilePage from "@/pages/ProfilePage";
import SettingsPage from "@/pages/SettingsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import HomePage from "@/pages/HomePage";
import DashboardPage from "@/pages/DashboardPage";
import CoursesPage from "@/pages/CoursesPage";
import QuestsPage from "@/pages/QuestsPage";
import { AuthGuard } from "@/routes/AuthGuard";


const routes = [
    {
        path: "/",
        loader: () => redirect("/login"),
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignupPage />,
    },
    {
        path: "/profile",
        element: (
            <AuthGuard>
                <ProfilePage />
            </AuthGuard>
        ),
    },
    {
        path: "/settings",
        element: <AuthGuard>
            <SettingsPage />
        </AuthGuard>,
    },
    {
        path: "/dashboard",
        element: <AuthGuard>
            <DashboardPage />
        </AuthGuard>,
    },
    {
        path: "/courses",
        element: <AuthGuard>
            <CoursesPage />
        </AuthGuard>,
    },
    {
        path: "/quests",
        element:
            <AuthGuard>
                <QuestsPage />
            </AuthGuard>,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    }
];

export default routes;