import CoursesSection from "@/components/Home/CoursesSection"
import GamificationSection from "@/components/Home/GamificationSection"
import HeroSection from "@/components/Home/HeroSection"
import LeaderboardSection from "@/components/Home/LeaderboardSection"
import QuestsSection from "@/components/Home/QuestsSection"
import { Footer } from "@/layout/Footer"
import Navbar from "@/layout/Navbar"
import NotificationPanel from "@/components/shared/NotificationPanel"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CoursesSection />
            <GamificationSection />
            <QuestsSection />
            <LeaderboardSection />
            <NotificationPanel onAccept={() => { }} onClose={() => { }} message="You are selected as a participant in the upcoming challenge!" isOpen />
            <Footer />
        </div>
    )
}

export default HomePage