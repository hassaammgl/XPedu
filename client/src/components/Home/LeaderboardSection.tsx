
import { NavLink } from 'react-router';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { BadgeIcon } from '@/components/ui/badge-icon';
import { Medal, Trophy, Award, BarChart3 } from 'lucide-react';

const leaderboardUsers = [
    {
        id: 1,
        username: "codeMaster",
        avatar: "https://github.com/shadcn.png",
        level: 15,
        xp: 15280,
        rank: 1,
        badges: ["CSS Master", "JS Expert", "API Wizard"],
    },
    {
        id: 2,
        username: "devNinja",
        avatar: "https://github.com/radix-ui.png",
        level: 14,
        xp: 14350,
        rank: 2,
        badges: ["React Pro", "Algorithm King", "Database Expert"],
    },
    {
        id: 3,
        username: "webWizard",
        avatar: "https://github.com/vercel.png",
        level: 14,
        xp: 14120,
        rank: 3,
        badges: ["HTML Hero", "Accessibility Pro", "Performance Guru"],
    },
    {
        id: 4,
        username: "codeWarrior",
        avatar: "",
        level: 13,
        xp: 13570,
        rank: 4,
        badges: ["Backend Master", "Security Expert"],
    },
    {
        id: 5,
        username: "devHunter",
        avatar: "",
        level: 13,
        xp: 13290,
        rank: 5,
        badges: ["MongoDB Pro", "Express Expert"],
    }
];

// Custom badge icon components
const getBadgeIcon = (name: string) => {
    switch (name) {
        case "CSS Master":
            return <Award color="#38BDF8" />;
        case "JS Expert":
            return <Award color="#FACC15" />;
        case "API Wizard":
            return <Award color="#8B5CF6" />;
        case "React Pro":
            return <Award color="#60DDFF" />;
        case "Algorithm King":
            return <Award color="#34D399" />;
        case "Database Expert":
            return <Award color="#F87171" />;
        case "HTML Hero":
            return <Award color="#FB923C" />;
        case "Accessibility Pro":
            return <Award color="#22D3EE" />;
        case "Performance Guru":
            return <Award color="#A3E635" />;
        case "Backend Master":
            return <Award color="#818CF8" />;
        case "Security Expert":
            return <Award color="#FB7185" />;
        case "MongoDB Pro":
            return <Award color="#2DD4BF" />;
        case "Express Expert":
            return <Award color="#F472B6" />;
        default:
            return <Award color="#CBD5E1" />;
    }
};

function LeaderboardSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-solo-blue/30 bg-solo-blue/10 text-solo-blue text-xs font-medium mb-4">
                            <Trophy size={12} className="mr-1" />
                            <span>Top Hunters</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-2 text-gradient">Leaderboard</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            See who's leading the way. Compete with other learners and climb the ranks.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="mt-4 md:mt-0 border-solo-blue/30 text-solo-blue hover:bg-solo-blue/10">
                        <NavLink to="/leaderboard">
                            <BarChart3 className="mr-2 h-4 w-4" />
                            Full Rankings
                        </NavLink>
                    </Button>
                </div>

                <div className="overflow-hidden neo-glass rounded-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-solo-muted/20 bg-solo-muted/10">
                                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Rank</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Hunter</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Level</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">XP</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Badges</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-solo-muted/20">
                                {leaderboardUsers.map((user) => (
                                    <tr
                                        key={user.id}
                                        className={`hover:bg-solo-muted/10 transition-colors ${user.rank <= 3 ? 'bg-solo-muted/5' : ''
                                            }`}
                                    >
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {user.rank === 1 ? (
                                                    <Medal className="h-5 w-5 text-yellow-500" />
                                                ) : user.rank === 2 ? (
                                                    <Medal className="h-5 w-5 text-gray-300" />
                                                ) : user.rank === 3 ? (
                                                    <Medal className="h-5 w-5 text-amber-700" />
                                                ) : (
                                                    <div className="h-5 w-5 flex items-center justify-center text-sm text-muted-foreground">
                                                        {user.rank}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <Avatar className="h-8 w-8">
                                                    <AvatarImage src={user.avatar} alt={user.username} />
                                                    <AvatarFallback className="bg-solo-muted text-solo-blue">
                                                        {user.username.substring(0, 2).toUpperCase()}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="ml-3">
                                                    <div className="text-sm font-medium">{user.username}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-solo-blue bg-solo-muted/50 shadow-[0_0_5px_rgba(0,191,255,0.5)]">
                                                <span className="text-xs font-bold text-solo-blue">{user.level}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="text-sm text-muted-foreground">{user.xp.toLocaleString()}</div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="flex space-x-1">
                                                {user.badges.slice(0, 3).map((badge, index) => (
                                                    <BadgeIcon
                                                        key={index}
                                                        name={badge}
                                                        icon={getBadgeIcon(badge)}
                                                        className="h-6 w-6"
                                                    />
                                                ))}
                                                {user.badges.length > 3 && (
                                                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-solo-muted text-xs text-muted-foreground">
                                                        +{user.badges.length - 3}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LeaderboardSection