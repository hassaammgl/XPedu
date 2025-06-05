import AppLayout from "@/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookUser, LayoutDashboard, Trophy } from "lucide-react";
import { useAuth } from "@/store/auth";

const DashboardPage = () => {
	const { user } = useAuth();

	return (
		<AppLayout>
			<main className="flex-1 p-4 md:p-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Card className="neo-glass">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Current Level
							</CardTitle>
							<LayoutDashboard className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">
								Level {user?.level}
							</div>
							<Progress value={user?.xp} className="mt-2" />
							<p className="text-xs text-muted-foreground mt-2">
								{user?.xp}/1000 XP to next level
							</p>
						</CardContent>
					</Card>

					<Card className="neo-glass">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Courses Progress
							</CardTitle>
							<BookUser className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">4/12</div>
							<Progress value={33} className="mt-2" />
							<p className="text-xs text-muted-foreground mt-2">
								Completed courses
							</p>
						</CardContent>
					</Card>

					<Card className="neo-glass">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Achievements
							</CardTitle>
							<Trophy className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">7</div>
							<Progress value={45} className="mt-2" />
							<p className="text-xs text-muted-foreground mt-2">
								Badges earned
							</p>
						</CardContent>
					</Card>
				</div>

				<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
					<Card className="neo-glass">
						<CardHeader>
							<CardTitle>Recent Activity</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<div className="w-2 h-2 rounded-full bg-solo-blue"></div>
									<div className="flex-1">
										<p className="text-sm font-medium">
											Completed HTML Basics
										</p>
										<p className="text-xs text-muted-foreground">
											2 hours ago
										</p>
									</div>
									<span className="text-xs text-solo-blue">
										+50 XP
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div className="w-2 h-2 rounded-full bg-solo-purple"></div>
									<div className="flex-1">
										<p className="text-sm font-medium">
											Started CSS Fundamentals
										</p>
										<p className="text-xs text-muted-foreground">
											5 hours ago
										</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<div className="w-2 h-2 rounded-full bg-green-500"></div>
									<div className="flex-1">
										<p className="text-sm font-medium">
											Achievement: First Steps
										</p>
										<p className="text-xs text-muted-foreground">
											1 day ago
										</p>
									</div>
									<span className="text-xs text-solo-blue">
										+100 XP
									</span>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="neo-glass">
						<CardHeader>
							<CardTitle>Quick Actions</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-2 gap-3">
								<Button
									className="h-20 flex flex-col gap-2"
									variant="outline"
								>
									<BookUser className="h-5 w-5" />
									<span className="text-xs">
										Continue Learning
									</span>
								</Button>
								<Button
									className="h-20 flex flex-col gap-2"
									variant="outline"
								>
									<Trophy className="h-5 w-5" />
									<span className="text-xs">
										View Achievements
									</span>
								</Button>
								<Button
									className="h-20 flex flex-col gap-2"
									variant="outline"
								>
									<LayoutDashboard className="h-5 w-5" />
									<span className="text-xs">Take Quiz</span>
								</Button>
								<Button
									className="h-20 flex flex-col gap-2"
									variant="outline"
								>
									<Bell className="h-5 w-5" />
									<span className="text-xs">
										View Progress
									</span>
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
		</AppLayout>
	);
};

export default DashboardPage;
