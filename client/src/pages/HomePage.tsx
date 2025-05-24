import CoursesSection from "@/components/Home/CoursesSection"
import GamificationSection from "@/components/Home/GamificationSection"
import HeroSection from "@/components/Home/HeroSection"
import LeaderboardSection from "@/components/Home/LeaderboardSection"
import QuestsSection from "@/components/Home/QuestsSection"
import { Footer } from "@/layout/Footer"
import Navbar from "@/layout/Navbar"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CoursesSection />
            <GamificationSection />
            <QuestsSection />
            <LeaderboardSection />
            <Footer />
        </div>
    )
}

export default HomePage