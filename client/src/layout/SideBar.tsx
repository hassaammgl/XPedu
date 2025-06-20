import { SidebarTrigger } from "@/components/ui/sidebar";
import {
	BookOpen,
	Settings,
	User,
	LayoutDashboard,
	Target,
	LogOutIcon,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/store/auth";
import { useToast } from "@/hooks/useToast";
import type { AxiosError } from "axios";

const menuItems = [
	{
		title: "Dashboard",
		url: "/dashboard",
		icon: LayoutDashboard,
	},
	{
		title: "Courses",
		url: "/courses",
		icon: BookOpen,
	},
	{
		title: "Quests",
		url: "/quests",
		icon: Target,
	},
];

const settingsItems = [
	{
		title: "Profile",
		url: "/profile",
		icon: User,
	},
	{
		title: "Settings",
		url: "/settings",
		icon: Settings,
	},
];

const AppSidebar = () => {
	const location = useLocation();
	const { user, logout } = useAuth();
	const { error, success } = useToast();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			success("Good bye!");
			navigate("/");
		} catch (err) {
			const message =
				(err as AxiosError<{ message?: string }>)?.response?.data
					?.message ??
				(err as Error)?.message ??
				"Logout failed 😵";
			error(message);
		}
	};

	return (
		<Sidebar>
			<SidebarHeader>
				<div className="flex items-center gap-2 px-2 py-2 justify-between">
					<div className="flex flex-col">
						<span className="font-bold text-gradient text-blue-500">
							Xpedu
						</span>
						<span className="font-light text-xs text-gradient">
							Game based LMS
						</span>
					</div>
					<SidebarTrigger />
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{menuItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										asChild
										isActive={
											location.pathname === item.url
										}
									>
										<NavLink to={item.url}>
											<item.icon className="text-sky-500 text-3xl" />
											<span>{item.title}</span>
										</NavLink>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Account</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{settingsItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										asChild
										isActive={
											location.pathname === item.url
										}
									>
										<NavLink to={item.url}>
											<item.icon className="text-sky-500" />
											<span>{item.title}</span>
										</NavLink>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<div className="flex items-center gap-2 px-2 py-2">
					<Avatar className="h-8 w-8 border border-solo-blue/50">
						<AvatarFallback className="bg-solo-muted text-solo-blue">
							{user?.name.slice(0, 2)}
						</AvatarFallback>
					</Avatar>
					<div className="flex flex-col flex-1 min-w-0">
						<span className="text-sm font-medium truncate">
							{user?.name}
						</span>
						<span className="text-xs text-muted-foreground truncate">
							Level {user?.level} • {user?.xp} XP
						</span>
					</div>
				</div>
				<div className="flex items-center gap-2 px-2 py-2">
					<SidebarMenuButton
						onClick={handleLogout}
						className="w-full flex"
						variant={"outline"}
					>
						<LogOutIcon className="text-red-500" />
						<span>Logout</span>
					</SidebarMenuButton>
				</div>
			</SidebarFooter>
		</Sidebar>
	);
};

export default AppSidebar;
