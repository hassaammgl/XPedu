import { useState } from 'react';
import { NavLink } from 'react-router';
import { Bell, Menu, Search, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { XpProgress } from '@/components/ui/xp-progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-solo-darker/80 backdrop-blur-sm border-solo-muted">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <NavLink to="/home" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-solo-blue to-solo-purple flex items-center justify-center text-white font-bold text-xl border-glow">X</div>
                    <span className="font-bold text-xl hidden md:block text-gradient">
                        XpEdu
                    </span>
                </NavLink>

                {/* Mobile menu button */}
                <button
                    className="p-2 md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <NavLink to="/courses" className="text-sm font-medium text-muted-foreground hover:text-solo-blue transition-colors">
                        Courses
                    </NavLink>
                    <NavLink to="/quests" className="text-sm font-medium text-muted-foreground hover:text-solo-blue transition-colors">
                        Quests
                    </NavLink>
                    <NavLink to="/leaderboard" className="text-sm font-medium text-muted-foreground hover:text-solo-blue transition-colors">
                        Leaderboard
                    </NavLink>
                    <NavLink to="/community" className="text-sm font-medium text-muted-foreground hover:text-solo-blue transition-colors">
                        Community
                    </NavLink>
                </nav>

                {/* Right section with search, notifications, XP, profile */}
                <div className="flex items-center gap-4">
                    <div className={`relative ${isSearchOpen ? "w-60" : "w-8"} transition-all duration-200`}>
                        {isSearchOpen ? (
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full bg-solo-muted text-sm rounded-md pl-8 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-solo-blue"
                                />
                                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <button
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                    onClick={() => setIsSearchOpen(false)}
                                >
                                    <X className="h-4 w-4 text-muted-foreground" />
                                </button>
                            </div>
                        ) : (
                            <button
                                className="p-1"
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <Search className="h-5 w-5 text-muted-foreground hover:text-solo-blue transition-colors" />
                            </button>
                        )}
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="relative p-1 hover:text-solo-blue">
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-solo-blue animate-pulse"></span>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80 neo-glass">
                            <DropdownMenuLabel className="text-solo-blue">Notifications</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <div className="max-h-[300px] overflow-y-auto">
                                <div className="p-3 hover:bg-solo-muted/50 transition-colors border-l-2 border-solo-blue">
                                    <div className="text-sm font-medium">New quest available!</div>
                                    <div className="text-xs text-muted-foreground mt-1">Complete the "HTML Basics" course to unlock.</div>
                                </div>
                                <DropdownMenuSeparator />
                                <div className="p-3 hover:bg-solo-muted/50 transition-colors">
                                    <div className="text-sm font-medium">Level up!</div>
                                    <div className="text-xs text-muted-foreground mt-1">You've reached level 5. New abilities unlocked.</div>
                                </div>
                                <DropdownMenuSeparator />
                                <div className="p-3 hover:bg-solo-muted/50 transition-colors">
                                    <div className="text-sm font-medium">Achievement unlocked</div>
                                    <div className="text-xs text-muted-foreground mt-1">CSS Master: Complete all CSS modules.</div>
                                </div>
                            </div>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer justify-center text-center text-sm text-solo-blue hover:text-solo-blue">
                                View all notifications
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* 
                    <div className="hidden sm:block">
                        <XpProgress currentXP={750} maxXP={1000} level={4} />
                    </div> */}

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-2 hover:opacity-80">
                                <Avatar className="h-8 w-8 border border-solo-blue/50">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                                    <AvatarFallback className="bg-solo-muted text-solo-blue">UN</AvatarFallback>
                                </Avatar>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="neo-glass">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Dashboard</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer text-solo-danger">Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-solo-muted bg-solo-darker animate-slide-up">
                    <nav className="flex flex-col py-4">
                        <NavLink
                            to="/courses"
                            className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-solo-blue hover:bg-solo-muted/20 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Courses
                        </NavLink>
                        <NavLink
                            to="/quests"
                            className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-solo-blue hover:bg-solo-muted/20 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Quests
                        </NavLink>
                        <NavLink
                            to="/leaderboard"
                            className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-solo-blue hover:bg-solo-muted/20 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Leaderboard
                        </NavLink>
                        <NavLink
                            to="/community"
                            className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-solo-blue hover:bg-solo-muted/20 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Community
                        </NavLink>
                        {/* <div className="px-6 py-3">
                            <XpProgress currentXP={750} maxXP={1000} level={4} />
                        </div> */}
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar


