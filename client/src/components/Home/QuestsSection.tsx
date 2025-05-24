
import { NavLink } from 'react-router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Award, Clock, Swords, Target } from 'lucide-react';
// import { useGamesStore } from '@/store/useGamesStore';
import { toast } from 'sonner';

const quests = [
    {
        id: 1,
        title: "CSS Battle Master",
        description: "Recreate 5 complex UI designs using only CSS.",
        difficulty: "Hard",
        type: "Challenge",
        deadlineLeft: "3 days",
        xp: 350,
        badge: "CSS Warrior",
        completed: false,
        color: "#38BDF8"
    },
    {
        id: 2,
        title: "API Integration",
        description: "Build a weather app using a public API.",
        difficulty: "Medium",
        type: "Project",
        deadlineLeft: "5 days",
        xp: 250,
        badge: "API Explorer",
        completed: false,
        color: "#FACC15"
    },
    {
        id: 3,
        title: "JavaScript Algorithms",
        description: "Solve 3 algorithm challenges in JavaScript.",
        difficulty: "Medium",
        type: "Challenge",
        deadlineLeft: "2 days",
        xp: 200,
        badge: "Algorithm Master",
        completed: false,
        color: "#34D399"
    }
];

function QuestsSection() {
    // const { markQuestComplete } = useGamesStore();

    const handleAcceptQuest = (questId: number, questTitle: string) => {
        // Simulate quest completion for demo purposes
        setTimeout(() => {
            // markQuestComplete(questId.toString());
            toast.success(`Quest "${questTitle}" completed! +${quests.find(q => q.id === questId)?.xp} XP`, {
                position: "top-center",
            });
        }, 2000);

        toast.info(`Quest "${questTitle}" started! Completing in 2 seconds for demo...`, {
            position: "top-center",
        });
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-solo-darker/50">
            <div className="container">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-solo-purple/30 bg-solo-purple/10 text-solo-purple text-xs font-medium mb-4">
                            <Swords size={12} className="mr-1" />
                            <span>Daily Challenges</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-2 text-gradient">Complete Quests, Earn Rewards</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Take on coding challenges and projects to gain experience, unlock badges, and climb the ranks.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="mt-4 md:mt-0 border-solo-purple/30 text-solo-purple hover:bg-solo-purple/10">
                        <NavLink to="/quests">View All Quests</NavLink>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {quests.map((quest) => (
                        <Card key={quest.id} className="neo-glass hover-scale overflow-hidden group border-t-4" style={{ borderTopColor: quest.color }}>
                            <CardHeader className="pb-2">
                                <div className="flex items-start justify-between">
                                    <Badge variant="outline" className="bg-solo-muted/20 text-muted-foreground border-solo-muted">
                                        {quest.type}
                                    </Badge>
                                    <Badge className="bg-gradient-to-r from-solo-blue to-solo-purple">
                                        {quest.difficulty}
                                    </Badge>
                                </div>
                                <h3 className="text-lg font-semibold mt-4">{quest.title}</h3>
                                <p className="text-sm text-muted-foreground">{quest.description}</p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex items-center space-x-2 text-xs">
                                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                                        <span className="text-muted-foreground">{quest.deadlineLeft} left</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-xs">
                                        <Target className="h-3.5 w-3.5 text-muted-foreground" />
                                        <span className="text-solo-blue font-medium">{quest.xp} XP</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-xs">
                                        <Award className="h-3.5 w-3.5 text-muted-foreground" />
                                        <span className="text-muted-foreground">Badge: {quest.badge}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full bg-gradient-to-r from-solo-blue to-solo-purple hover:opacity-90 transition-opacity"
                                    onClick={() => handleAcceptQuest(quest.id, quest.title)}
                                >
                                    Accept Quest
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default QuestsSection