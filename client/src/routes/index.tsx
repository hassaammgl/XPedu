import { redirect } from "react-router"
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import ProfilePage from "@/pages/ProfilePage";
import SettingsPage from "@/pages/SettingsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import HomePage from "@/pages/HomePage";


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
        path: "*",
        element: <NotFoundPage />,
    }
];

export default routes;