import { BadgeIcon } from '@/components/ui/badge-icon';
import { Award, Code, FileCode, Layout, Server, Zap } from 'lucide-react';

function GamificationSection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-solo-darker/50 to-transparent overflow-hidden relative">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-solo-blue/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-solo-purple/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-solo-purple/30 bg-solo-purple/10 text-solo-purple text-xs font-medium mb-4">
                        <Zap size={12} className="mr-1" />
                        <span>Gamified Learning</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Level Up Your Coding Skills</h2>
                    <p className="text-muted-foreground">
                        Earn experience points, unlock achievements, and climb the ranks as you master web development through our gamified learning platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* XP & Levels */}
                    <div className="neo-glass p-6 rounded-xl">
                        <div className="h-12 w-12 rounded-lg bg-solo-blue/20 flex items-center justify-center mb-4">
                            <Zap className="h-6 w-6 text-solo-blue" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">XP & Levels</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Earn experience points for completing courses, quests, and challenges. Level up to unlock new content and abilities.
                        </p>
                        <div className="bg-solo-muted/20 rounded-lg p-4">
                            <div className="grid grid-cols-4 gap-2 text-center">
                                {[1, 2, 3, 4].map((level) => (
                                    <div key={level} className="flex flex-col items-center">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${level <= 2 ? 'bg-solo-blue/20 text-solo-blue border border-solo-blue/50' : 'bg-solo-muted/30 text-muted-foreground border border-solo-muted/50'}`}>
                                            {level}
                                        </div>
                                        <div className={`text-xs ${level <= 2 ? 'text-solo-blue' : 'text-muted-foreground'}`}>
                                            {level === 1 && 'Novice'}
                                            {level === 2 && 'Initiate'}
                                            {level === 3 && 'Adept'}
                                            {level === 4 && 'Expert'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 h-1.5 bg-solo-muted rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-solo-blue to-solo-purple" style={{ width: '45%' }}></div>
                            </div>
                            <div className="flex justify-between mt-1 text-xs">
                                <span className="text-muted-foreground">450 / 1000 XP</span>
                                <span className="text-solo-blue">Level 2</span>
                            </div>
                        </div>
                    </div>

                    {/* Badges & Achievements */}
                    <div className="neo-glass p-6 rounded-xl">
                        <div className="h-12 w-12 rounded-lg bg-solo-purple/20 flex items-center justify-center mb-4">
                            <Award className="h-6 w-6 text-solo-purple" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Badges & Achievements</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Collect badges by mastering specific skills and completing achievements to showcase your expertise.
                        </p>
                        <div className="bg-solo-muted/20 rounded-lg p-4">
                            <div className="grid grid-cols-5 gap-2">
                                <BadgeIcon name="HTML Master" icon={<Layout />} color="#FB923C" />
                                <BadgeIcon name="CSS Pro" icon={<Layout />} color="#38BDF8" />
                                <BadgeIcon name="JS Wizard" icon={<FileCode />} color="#FACC15" earned={false} />
                                <BadgeIcon name="React Dev" icon={<Code />} color="#60DDFF" earned={false} />
                                <BadgeIcon name="API Expert" icon={<Server />} color="#34D399" earned={false} />
                            </div>
                            <div className="mt-4 text-xs text-center text-muted-foreground">
                                <span>2 / 5 badges earned</span>
                            </div>
                        </div>
                    </div>

                    {/* Quests & Missions */}
                    <div className="neo-glass p-6 rounded-xl">
                        <div className="h-12 w-12 rounded-lg bg-solo-blue/20 flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-solo-blue">
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                <path d="m7 10 3 3 7-7"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Quests & Missions</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Take on coding challenges and complete special missions to test your skills and earn bonus rewards.
                        </p>
                        <div className="bg-solo-muted/20 rounded-lg p-4">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-solo-blue"></div>
                                        <span className="text-xs">Build a Portfolio Page</span>
                                    </div>
                                    <span className="text-xs text-solo-blue">+150 XP</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-solo-blue"></div>
                                        <span className="text-xs">Complete 3 CSS Challenges</span>
                                    </div>
                                    <span className="text-xs text-solo-blue">+75 XP</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-solo-muted"></div>
                                        <span className="text-xs text-muted-foreground">Build a Weather App</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">+200 XP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default GamificationSection