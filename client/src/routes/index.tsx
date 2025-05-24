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
        element: <ProfilePage />,
    },
    {
        path: "/settings",
        element: <SettingsPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
    },
    {
        path: "/courses",
        element: <CoursesPage />,
    },
    {
        path: "/courses",
        element: <CoursesPage />,
    },
    {
        path: "/quests",
        element: <QuestsPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    }
];

export default routes;