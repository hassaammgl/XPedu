import AppLayout from "@/layout/AppLayout";
import { useState } from "react";
import { NavLink as Link, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Users, Clock, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

const CourseDetails = () => {
	const { id } = useParams();
	const courseId = parseInt(id || "1");
	const course = parseInt(id || "1");
	// const course = courseData[courseId as keyof typeof courseData];
	const [activeTab, setActiveTab] = useState("overview");

	if (!course) {
		return (
			<AppLayout>
				<div className="flex flex-col min-h-screen">
					<main className="flex-1 flex items-center justify-center">
						<div className="text-center">
							<h1 className="text-2xl font-bold mb-4">
								Course Not Found
							</h1>
							<Link to="/courses">
								<Button>Back to Courses</Button>
							</Link>
						</div>
					</main>
				</div>
			</AppLayout>
		);
	}

	const handleStartLesson = (lessonId: number) => {};

	const handleEnrollCourse = () => {};

	const completedLessons = 55;
	const progressPercentage = (completedLessons / 22) * 100;

	return (
		<AppLayout>
			<div className="flex flex-col min-h-screen">
				<main className="flex-1">
					{/* Hero Section */}
					<div className="relative bg-gradient-to-r from-solo-blue/10 to-solo-purple/10 py-16">
						<div className="container">
							<Link
								to="/courses"
								className="inline-flex items-center gap-2 text-solo-blue hover:text-solo-purple transition-colors mb-6"
							>
								<ArrowLeft className="h-4 w-4" />
								Back to Courses
							</Link>

							<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
								<div className="lg:col-span-2">
									<Badge
										className="mb-4"
										style={{
											backgroundColor: `${course?.color}20`,
											color: course?.color,
										}}
									>
										{course?.category}
									</Badge>
									<h1 className="text-4xl font-bold mb-4">
										{course?.title}
									</h1>
									<p className="text-xl text-muted-foreground mb-6">
										{course?.description}
									</p>

									<div className="flex flex-wrap items-center gap-6 mb-6">
										<div className="flex items-center gap-2">
											<Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
											<span className="font-medium">
												{course?.rating}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<Users className="h-5 w-5 text-muted-foreground" />
											<span>
												{course?.students?.toLocaleString()}{" "}
												students
											</span>
										</div>
										<div className="flex items-center gap-2">
											<Clock className="h-5 w-5 text-muted-foreground" />
											<span>{course?.duration}</span>
										</div>
										<Badge variant="outline">
											{course?.level}
										</Badge>
									</div>

									<div className="flex gap-4">
										<Button
											size="lg"
											className="bg-gradient-to-r from-solo-blue to-solo-purple hover:opacity-90"
											onClick={handleEnrollCourse}
										>
											Enroll Now - {course?.price}
										</Button>
										<Button variant="outline" size="lg">
											<Play className="h-4 w-4 mr-2" />
											Preview Course
										</Button>
									</div>
								</div>

								<div className="lg:col-span-1">
									<Card className="neo-glass">
										<CardHeader>
											<img
												src={course?.image}
												alt={course?.title}
												className="w-full h-48 object-cover rounded-lg"
											/>
										</CardHeader>
										<CardContent className="space-y-4">
											<div>
												<div className="flex justify-between text-sm mb-2">
													<span>Course Progress</span>
													<span>
														{Math.round(
															progressPercentage
														)}
														%
													</span>
												</div>
												<Progress
													value={progressPercentage}
													className="h-2"
												/>
											</div>

											<div className="space-y-2 text-sm">
												<div className="flex justify-between">
													<span>Instructor:</span>
													<span className="font-medium">
														{course?.instructor}
													</span>
												</div>
												<div className="flex justify-between">
													<span>Lessons:</span>
													<span className="font-medium">
														{
															course?.lessons
																?.length
														}
													</span>
												</div>
												<div className="flex justify-between">
													<span>XP Reward:</span>
													<span className="font-medium text-solo-blue">
														{course?.xp} XP
													</span>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>
						</div>
					</div>

					{/* Course Content */}
					<div className="container py-12">
						<Tabs
							value={activeTab}
							onValueChange={setActiveTab}
							className="w-full"
						>
							<TabsList className="grid w-full grid-cols-5">
								<TabsTrigger value="overview">
									Overview
								</TabsTrigger>
								<TabsTrigger value="curriculum">
									Curriculum
								</TabsTrigger>
								<TabsTrigger value="tests">Tests</TabsTrigger>
								<TabsTrigger value="instructor">
									Instructor
								</TabsTrigger>
								<TabsTrigger value="reviews">
									Reviews
								</TabsTrigger>
							</TabsList>

							<TabsContent value="overview" className="mt-8">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									<div>
										<h3 className="text-2xl font-bold mb-4">
											About This Course
										</h3>
										<p className="text-muted-foreground mb-6">
											{course?.longDescription}
										</p>

										<h4 className="text-lg font-semibold mb-3">
											What You'll Learn
										</h4>
										<ul className="space-y-2">
											{course?.outcomes?.map(
												(outcome, index) => (
													<li
														key={index}
														className="flex items-start gap-2"
													>
														<CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
														<span>{outcome}</span>
													</li>
												)
											)}
										</ul>
									</div>

									<div>
										<h4 className="text-lg font-semibold mb-3">
											Skills You'll Gain
										</h4>
										<div className="flex flex-wrap gap-2 mb-6">
											{course?.skills?.map(
												(skill, index) => (
													<Badge
														key={index}
														variant="outline"
													>
														{skill}
													</Badge>
												)
											)}
										</div>

										<h4 className="text-lg font-semibold mb-3">
											Prerequisites
										</h4>
										<ul className="space-y-2">
											{course?.prerequisites?.map(
												(prereq, index) => (
													<li
														key={index}
														className="flex items-start gap-2"
													>
														<div className="w-2 h-2 bg-solo-blue rounded-full mt-2 flex-shrink-0"></div>
														<span>{prereq}</span>
													</li>
												)
											)}
										</ul>
									</div>
								</div>
							</TabsContent>

							<TabsContent value="curriculum" className="mt-8">
								<h3 className="text-2xl font-bold mb-6">
									Course Curriculum
								</h3>
								<div className="space-y-4">
									{course?.lessons?.map((lesson) => (
										<Card
											key={lesson.id}
											className="neo-glass"
										>
											<CardContent className="p-4">
												<div className="flex items-center justify-between">
													<div className="flex items-center gap-3">
														{lesson?.completed ? (
															<CheckCircle className="h-5 w-5 text-green-500" />
														) : (
															<Lock className="h-5 w-5 text-muted-foreground" />
														)}
														<div>
															<h4 className="font-medium">
																{lesson?.title}
															</h4>
															<p className="text-sm text-muted-foreground">
																{
																	lesson?.duration
																}
															</p>
														</div>
													</div>
													<Button
														variant={
															lesson?.completed
																? "outline"
																: "default"
														}
														size="sm"
														onClick={() =>
															handleStartLesson(
																lesson?.id
															)
														}
													>
														<Play className="h-4 w-4 mr-2" />
														{lesson?.completed
															? "Review"
															: "Start"}
													</Button>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							</TabsContent>

							<TabsContent value="tests" className="mt-8">
								{/* <TestsSection /> */}
								<div></div>
							</TabsContent>

							<TabsContent value="instructor" className="mt-8">
								<Card className="neo-glass">
									<CardContent className="p-6">
										<div className="flex items-start gap-6">
											<div className="w-20 h-20 bg-gradient-to-br from-solo-blue to-solo-purple rounded-full flex items-center justify-center text-white text-2xl font-bold">
												SJ
											</div>
											<div>
												<h3 className="text-2xl font-bold mb-2">
													{course?.instructor}
												</h3>
												<p className="text-muted-foreground mb-4">
													Senior Frontend Developer &
													Educator
												</p>
												<p className="text-muted-foreground">
													Sarah is a passionate web
													developer with over 8 years
													of experience in frontend
													development. She has worked
													with leading tech companies
													and has taught thousands of
													students worldwide. Her
													teaching style focuses on
													practical, hands-on learning
													that prepares students for
													real-world challenges.
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</TabsContent>

							<TabsContent value="reviews" className="mt-8">
								<div className="space-y-6">
									<div className="flex items-center gap-4 mb-6">
										<div className="text-4xl font-bold">
											{course?.rating}
										</div>
										<div>
											<div className="flex items-center gap-1 mb-1">
												{[1, 2, 3, 4, 5].map((star) => (
													<Star
														key={star}
														className={`h-4 w-4 ${
															star <=
															Math.floor(
																course?.rating
															)
																? "fill-yellow-400 text-yellow-400"
																: "text-gray-300"
														}`}
													/>
												))}
											</div>
											<p className="text-sm text-muted-foreground">
												{course?.students?.toLocaleString()}{" "}
												reviews
											</p>
										</div>
									</div>

									{/* Sample reviews */}
									<Card className="neo-glass">
										<CardContent className="p-6">
											<div className="flex items-start gap-4">
												<div className="w-10 h-10 bg-gradient-to-br from-solo-purple to-solo-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
													JD
												</div>
												<div>
													<div className="flex items-center gap-2 mb-2">
														<h4 className="font-medium">
															John Doe
														</h4>
														<div className="flex items-center gap-1">
															{[
																1, 2, 3, 4, 5,
															].map((star) => (
																<Star
																	key={star}
																	className="h-3 w-3 fill-yellow-400 text-yellow-400"
																/>
															))}
														</div>
													</div>
													<p className="text-muted-foreground">
														Excellent course! The
														explanations are clear
														and the hands-on
														exercises really help
														solidify the concepts.
														Highly recommended for
														beginners.
													</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</main>
			</div>
		</AppLayout>
	);
};

export default CourseDetails;
