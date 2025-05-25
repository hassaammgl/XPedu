import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"


const TopBar = () => {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex flex-1 items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                    <p className="text-sm text-muted-foreground">Welcome back! Track your learning progress.</p>
                </div>
                <Button variant="outline" size="icon">
                    <Bell className="h-4 w-4" />
                </Button>
            </div>
        </header>
    )
}

export default TopBar