import AppLayout from "@/layout/AppLayout"
import CoursesSection from "@/components/Home/CoursesSection"

const CoursesPage = () => {
    return (
        <AppLayout>
            <main className="flex-1">
                <div className="container py-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold text-gradient">Available Courses</h1>
                        <p className="text-muted-foreground">Level up your skills with our comprehensive courses.</p>
                    </div>
                </div>
                <CoursesSection />
            </main>
        </AppLayout>
    )
}

export default CoursesPage