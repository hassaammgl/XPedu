
import {
    BookOpen, Settings,
    User, LayoutDashboard, Target
} from "lucide-react"
import { NavLink, useLocation } from "react-router"

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
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Menu items
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
   
]

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
]

function AppSidebar() {
    const location = useLocation()

    return (
        <Sidebar >
            <SidebarHeader>
                <div className="flex items-center gap-2 px-2 py-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-solo-blue to-solo-purple flex items-center justify-center text-white font-bold text-xl border-glow">
                        X
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-sm text-gradient">Xpedu</span>
                        <span className="font-light text-xs text-gradient">Game based LMS</span>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={location.pathname === item.url}>
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

                <SidebarGroup>
                    <SidebarGroupLabel>Account</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {settingsItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={location.pathname === item.url}>
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
                        <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                        <AvatarFallback className="bg-solo-muted text-solo-blue">UN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-sm font-medium truncate">User Name</span>
                        <span className="text-xs text-muted-foreground truncate">Level 5 • 750 XP</span>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar;