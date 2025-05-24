import { ModeToggle } from "@/components/mode-toggle";
import type { AppLayoutProps } from "@/types";
import AppSidebar from "@/layout/SideBar";

export const AppLayout = ({ children }: AppLayoutProps) => {

    return (
        <div className="min-h-screen bg-background flex">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
                {/* <TopBar /> */}
                <main className="flex-1 p-4 md:p-6 overflow-auto">
                    <div className="max-w-7xl mx-auto">{children}</div>
                </main>
            </div>
            <div className="fixed bottom-6 right-6">
                <ModeToggle />
            </div>
        </div>
    );
};

export default AppLayout