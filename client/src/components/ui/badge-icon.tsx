import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeIconProps {
    name: string;
    icon: React.ReactNode;
    color?: string;
    earned?: boolean;
    className?: string;
}

export function BadgeIcon({ name, icon, color = "#00DDFF", earned = true, className }: BadgeIconProps) {
    return (
        <div className={cn("relative group", className)}>
            <div
                className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    earned
                        ? "bg-opacity-20 animate-pulse-glow"
                        : "bg-solo-muted grayscale opacity-50",
                    "transition-all duration-300"
                )}
                style={{
                    backgroundColor: earned ? `${color}20` : undefined,
                    '--glow-color': earned ? `${color}70` : undefined,
                } as React.CSSProperties}
            >
                <div className="text-xl text-white">
                    {icon}
                </div>
            </div>

            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-solo-dark p-1.5 rounded text-xs whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 shadow-lg border border-solo-blue/30">
                {name}
            </div>
        </div>
    );
}
