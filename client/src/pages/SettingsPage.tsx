import AppLayout from "@/layout/AppLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bell, Shield } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
	return (
		<AppLayout>
			<main className="flex-1">
				<div className="container py-8">
					<div className="flex flex-col gap-4">
						<h1 className="text-4xl font-bold text-gradient">
							Settings
						</h1>
						<p className="text-muted-foreground">
							Customize your learning experience.
						</p>
					</div>

					<div className="space-y-8 mt-8">
						<Card>
							<CardHeader>
								<div className="flex items-center gap-2">
									<Bell className="h-5 w-5 text-solo-blue" />
									<CardTitle>Notification Settings</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center justify-between">
									<Label htmlFor="quest-notifications">
										Quest Notifications
									</Label>
									<Switch />
								</div>
								<div className="flex items-center justify-between">
									<Label htmlFor="achievement-notifications">
										Achievement Notifications
									</Label>
									<Switch />
								</div>
								<div className="flex items-center justify-between">
									<Label htmlFor="community-notifications">
										Community Updates
									</Label>
									<Switch />
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<div className="flex items-center gap-2">
									<Shield className="h-5 w-5 text-solo-purple" />
									<CardTitle>Challenge Rules</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="space-y-1">
										<Label htmlFor="penalties">
											XP Penalties
										</Label>
										<p className="text-sm text-muted-foreground">
											Lose XP for incorrect answers
										</p>
									</div>
									<Switch />
								</div>
								<div className="flex items-center justify-between">
									<div className="space-y-1">
										<Label htmlFor="strict-mode">
											Strict Mode
										</Label>
										<p className="text-sm text-muted-foreground">
											No hints or help available
										</p>
									</div>
									<Switch />
								</div>
								<div className="flex items-center justify-between">
									<div className="space-y-1">
										<Label htmlFor="time-limit">
											Time Limits
										</Label>
										<p className="text-sm text-muted-foreground">
											Enable time limits on challenges
										</p>
									</div>
									<Switch />
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
		</AppLayout>
	);
};

export default SettingsPage;
