import { ModeToggle } from "@/components/mode-toggle";
import type { AppLayoutProps } from "@/types";
import AppSidebar from "@/layout/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import TopBar from "./TopBar";

export const AppLayout = ({ children }: AppLayoutProps) => {

    return (
        <SidebarProvider>

            <div className="min-h-screen bg-background flex w-full">
                <AppSidebar />
                <div className="w-full ">
                    <TopBar />
                    <main className="p-4 md:p-6 overflow-auto w-full">
                        <div className="w-full">{children}</div>
                    </main>
                </div>
                <div className="fixed bottom-6 right-6">
                    <ModeToggle />
                </div>
            </div>
        </SidebarProvider>
    );
};

export default AppLayout