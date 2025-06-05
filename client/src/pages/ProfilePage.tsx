import AppLayout from "@/layout/AppLayout";
import { useAuth } from "@/store/auth";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PenLine } from "lucide-react";

const ProfilePage = () => {
	const { user } = useAuth();

	return (
		<AppLayout>
			<main className="flex-1">
				<div className="container py-8">
					<div className="flex flex-col gap-4">
						<h1 className="text-4xl font-bold text-gradient">
							Profile
						</h1>
						<p className="text-muted-foreground">
							Manage your profile and achievements.
						</p>
					</div>

					<Card className="mt-8">
						<CardHeader>
							<div className="flex items-center justify-between">
								<CardTitle className="text-xl">Profile Information</CardTitle>
								<Button variant="outline" size="icon">
									<PenLine className="h-4 w-4" />
								</Button>
							</div>
						</CardHeader>
						<CardContent>
							<div className="flex flex-col md:flex-row items-center gap-6">
								<div className="space-y-4">
									<div>
										<h3 className="text-lg font-semibold">
											Username
										</h3>
										<p className="text-sm text-muted-foreground">
											{user?.name}
										</p>
									</div>
									<div>
										<h3 className="text-lg font-semibold">
											Email
										</h3>
										<p className="text-sm text-muted-foreground">
											{user?.email}
										</p>
									</div>
									<div>
										<h3 className="text-lg font-semibold">
											Rank
										</h3>
										<p className="text-sm text-muted-foreground">
											{user?.rank}
										</p>
									</div>
									<div>
										<Button className="text-white">Reset Password</Button>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
		</AppLayout>
	);
};

export default ProfilePage;
