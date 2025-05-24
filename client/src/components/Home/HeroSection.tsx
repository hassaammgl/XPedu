import { NavLink } from 'react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap } from 'lucide-react';

function HeroSection() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-hero-pattern bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-solo-darker/90 to-solo-darker/70 backdrop-blur-sm"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-40 h-40 bg-solo-blue/5 rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="absolute bottom-20 right-10 w-60 h-60 bg-solo-purple/5 rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-solo-blue/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-solo-blue/30 bg-solo-blue/10 text-solo-blue text-xs font-medium mb-6 animate-fade-in">
                        <Zap size={12} className="mr-1" />
                        <span>Level up your development skills</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gradient animate-fade-in">
                        Start Your Developer <br /> Journey and Level Up
                    </h1>

                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in">
                        Master web development through gamified learning. Complete quests, earn XP, and rise through the ranks from HTML basics to full-stack mastery.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                        <Button asChild size="lg" className="bg-gradient-to-r from-solo-blue to-solo-purple hover:opacity-90 transition-opacity">
                            <NavLink to="/courses">
                                Start Your Journey
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </NavLink>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-solo-blue/30 text-solo-blue hover:bg-solo-blue/10">
                            <NavLink to="/quests">
                                <Code className="mr-2 h-4 w-4" />
                                Browse Quests
                            </NavLink>
                        </Button>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
                        <div className="flex flex-col items-center">
                            <div className="text-3xl font-bold text-solo-blue mb-1">50+</div>
                            <div className="text-sm text-muted-foreground">Interactive Courses</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl font-bold text-solo-blue mb-1">100+</div>
                            <div className="text-sm text-muted-foreground">Coding Quests</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl font-bold text-solo-blue mb-1">20k+</div>
                            <div className="text-sm text-muted-foreground">Active Learners</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl font-bold text-solo-blue mb-1">30+</div>
                            <div className="text-sm text-muted-foreground">Skill Badges</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection