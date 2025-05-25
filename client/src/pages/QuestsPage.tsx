import AppLayout from "@/layout/AppLayout"
import QuestsSection from "@/components/Home/QuestsSection"

const QuestsPage = () => {
    return (
        <AppLayout>
            <main className="flex-1">
                <div className="container py-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold text-gradient">Daily Quests</h1>
                        <p className="text-muted-foreground">Complete challenges to earn XP and unique badges.</p>
                    </div>
                </div>
                <QuestsSection />
            </main>
        </AppLayout>
    )
}

export default QuestsPage