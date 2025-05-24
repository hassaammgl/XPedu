
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotificationPanelProps {
    message: string;
    isOpen?: boolean;
    onAccept: () => void;
    onClose: () => void;
}

export function NotificationPanel({
    message,
    isOpen: initialOpen = false,
    onAccept,
    onClose,
}: NotificationPanelProps) {
    const [isOpen, setIsOpen] = useState(initialOpen);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (initialOpen) {
            setIsOpen(true);
            setIsAnimating(true);
            const timer = setTimeout(() => setIsAnimating(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [initialOpen]);

    const handleAccept = () => {
        setIsOpen(false);
        onAccept();
    };

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={handleClose}
            ></div>

            <div
                className={cn(
                    "relative w-full max-w-md border border-solo-blue/50 backdrop-blur-md bg-black/70",
                    "overflow-hidden animate-fade-in",
                    isAnimating ? "animate-notification-glow" : ""
                )}
            >
                {/* Top border effect */}
                <div className="h-1 bg-gradient-to-r from-solo-blue via-transparent to-solo-blue"></div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-2 rounded-full bg-solo-blue/20">
                            <Info className="h-6 w-6 text-solo-blue" />
                        </div>
                        <div>
                            <div className="text-lg font-bold uppercase tracking-wider text-solo-blue mb-1">
                                Notification
                            </div>
                            <p className="text-white/90">{message}</p>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-4">
                        <Button
                            variant="outline"
                            className="border-solo-blue/30 text-solo-blue hover:bg-solo-blue/10"
                            onClick={handleClose}
                        >
                            Decline
                        </Button>
                        <Button
                            className="bg-gradient-to-r from-solo-blue to-solo-purple hover:opacity-90 transition-opacity"
                            onClick={handleAccept}
                        >
                            Accept
                        </Button>
                    </div>
                </div>

                {/* Bottom border effect */}
                <div className="h-1 bg-gradient-to-r from-solo-blue via-transparent to-solo-blue"></div>
            </div>
        </div>
    );
}

export default NotificationPanel