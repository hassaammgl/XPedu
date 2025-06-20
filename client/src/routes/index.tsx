import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import ProfilePage from "@/pages/ProfilePage";
import SettingsPage from "@/pages/SettingsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import HomePage from "@/pages/HomePage";
import DashboardPage from "@/pages/DashboardPage";
import CoursesPage from "@/pages/Courses/CoursesPage";
import CourseDetails from "@/pages/Courses/CourseDetails";
import QuestsPage from "@/pages/QuestsPage";
import { AuthGuard } from "@/routes/AuthGuard";
import { AdminGuard } from "@/routes/AdminGuard";
import AdminLoginPage from "@/pages/admin/AdminLoginPage";
import AdminDashboard from "@/pages/admin/AdminDashboard";

const routes = [
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/signup",
		element: <SignupPage />,
	},
	{
		path: "/",
		element: (
			<AuthGuard>
				<HomePage />
			</AuthGuard>
		),
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
		element: (
			<AuthGuard>
				<SettingsPage />
			</AuthGuard>
		),
	},
	{
		path: "/dashboard",
		element: (
			<AuthGuard>
				<DashboardPage />
			</AuthGuard>
		),
	},
	{
		path: "/courses",
		element: (
			<AuthGuard>
				<CoursesPage />
			</AuthGuard>
		),
	},
	{
		path: "/courses/:courseid",
		element: (
			<AuthGuard>
				<CourseDetails/>
			</AuthGuard>
		),
	},
	{
		path: "/quests",
		element: (
			<AuthGuard>
				<QuestsPage />
			</AuthGuard>
		),
	},
	{
		path: "/admin/login",
		element: <AdminLoginPage />,
	},
	{
		path: "/admin/dashboard",
		element: (
			<AdminGuard>
				<AdminDashboard />
			</AdminGuard>
		),
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
];

export default routes;
