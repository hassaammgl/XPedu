
import { NavLink } from 'react-router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, FileCode, Layout, Layers, Server } from 'lucide-react';

const courses = [
    {
        id: 1,
        title: "HTML & CSS Fundamentals",
        description: "Learn the basics of web structure and styling.",
        icon: <Layout className="h-5 w-5" />,
        level: "Beginner",
        xp: 500,
        progress: 0,
        lessonCount: 12,
        category: "Frontend",
        color: "#38BDF8"
    },
    {
        id: 2,
        title: "JavaScript Essentials",
        description: "Master the core language of the web.",
        icon: <FileCode className="h-5 w-5" />,
        level: "Beginner",
        xp: 750,
        progress: 0,
        lessonCount: 15,
        category: "Frontend",
        color: "#FACC15"
    },
    {
        id: 3,
        title: "React Development",
        description: "Build powerful user interfaces with React.",
        icon: <Code className="h-5 w-5" />,
        level: "Intermediate",
        xp: 1000,
        progress: 0,
        lessonCount: 20,
        category: "Frontend",
        color: "#60DDFF"
    },
    {
        id: 4,
        title: "Backend with Express",
        description: "Create robust APIs and server applications.",
        icon: <Server className="h-5 w-5" />,
        level: "Intermediate",
        xp: 1200,
        progress: 0,
        lessonCount: 18,
        category: "Backend",
        color: "#34D399"
    },
    {
        id: 5,
        title: "Full Stack Mastery",
        description: "Connect frontend and backend for complete applications.",
        icon: <Layers className="h-5 w-5" />,
        level: "Advanced",
        xp: 1500,
        progress: 0,
        lessonCount: 25,
        category: "Full Stack",
        color: "#8B5CF6"
    }
];

function CoursesSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 text-gradient">Start Your Learning Path</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Follow a structured curriculum to master web development, from basics to advanced topics.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="mt-4 md:mt-0 border-solo-blue/30 text-solo-blue hover:bg-solo-blue/10">
                        <NavLink to="/courses">View All Courses</NavLink>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <Card key={course.id} className="neo-glass hover-scale overflow-hidden group">
                            <CardHeader className="pb-2">
                                <div className="flex items-start justify-between">
                                    {/* <div
                                        className="flex items-center justify-center w-10 h-10 rounded-lg"
                                        style={{ backgroundColor: `${course.color}20` }}
                                    >
                                        {React.cloneElement(course.icon as React.ReactElement, {
                                            style: { color: course.color }
                                        })}
                                    </div> */}
                                    <Badge variant="outline" className="bg-solo-muted/20 text-muted-foreground border-solo-muted">
                                        {course.category}
                                    </Badge>
                                </div>
                                <h3 className="text-lg font-semibold mt-4">{course.title}</h3>
                                <p className="text-sm text-muted-foreground">{course.description}</p>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col space-y-3">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-muted-foreground">Progress</span>
                                        <span className="text-solo-blue font-medium">{course.progress}%</span>
                                    </div>
                                    <Progress value={course.progress} className="h-1.5 bg-solo-muted" />

                                    <div className="flex items-center justify-between text-xs mt-4">
                                        <div>
                                            <span className="text-muted-foreground">Level: </span>
                                            <span className="font-medium">{course.level}</span>
                                        </div>
                                        <div>
                                            <span className="text-muted-foreground">Lessons: </span>
                                            <span className="font-medium">{course.lessonCount}</span>
                                        </div>
                                        <div>
                                            <span className="text-solo-blue font-medium">{course.xp} XP</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full bg-gradient-to-r from-solo-blue to-solo-purple hover:opacity-90 transition-opacity">
                                    <NavLink to={`/courses/${course.id}`}>
                                        Start Course
                                    </NavLink>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CoursesSection