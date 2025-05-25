import AppLayout from "@/layout/AppLayout"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Bell, Shield } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SettingsPage = () => {
    return (
        <AppLayout>
            <main className="flex-1">
                <div className="container py-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold text-gradient">Settings</h1>
                        <p className="text-muted-foreground">Customize your learning experience.</p>
                    </div>

                    <div className="space-y-8 mt-8">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Bell className="h-5 w-5 text-solo-blue" />
                                    <CardTitle>Notification Settings</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="quest-notifications">Quest Notifications</Label>
                                    <Input
                                        type="checkbox"
                                        id="quest-notifications"
                                        // checked={notifications.quests}
                                        // onChange={() => handleNotificationChange('quests')}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="achievement-notifications">Achievement Notifications</Label>
                                    <Input
                                        type="checkbox"
                                        id="achievement-notifications"
                                        // checked={notifications.achievements}
                                        // onChange={() => handleNotificationChange('achievements')}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="community-notifications">Community Updates</Label>
                                    <Input
                                        type="checkbox"
                                        id="community-notifications"
                                        // checked={notifications.community}
                                        // onChange={() => handleNotificationChange('community')}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-solo-purple" />
                                    <CardTitle>Challenge Rules</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <Label htmlFor="penalties">XP Penalties</Label>
                                        <p className="text-sm text-muted-foreground">Lose XP for incorrect answers</p>
                                    </div>
                                    <Input
                                        type="checkbox"
                                        id="penalties"
                                        // checked={rules.penalties}
                                        // onChange={() => handleRuleChange('penalties')}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <Label htmlFor="strict-mode">Strict Mode</Label>
                                        <p className="text-sm text-muted-foreground">No hints or help available</p>
                                    </div>
                                    <Input
                                        type="checkbox"
                                        id="strict-mode"
                                        // checked={rules.strictMode}
                                        // onChange={() => handleRuleChange('strictMode')}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <Label htmlFor="time-limit">Time Limits</Label>
                                        <p className="text-sm text-muted-foreground">Enable time limits on challenges</p>
                                    </div>
                                    <Input
                                        type="checkbox"
                                        id="time-limit"
                                        // checked={rules.timeLimit}
                                        // onChange={() => handleRuleChange('timeLimit')}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </AppLayout>
    )
}

export default SettingsPage