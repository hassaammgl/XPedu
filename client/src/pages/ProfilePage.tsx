import AppLayout from "@/layout/AppLayout"
// import { useAuth } from "@/store/auth"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { PenLine, UserRound } from "lucide-react"

const ProfilePage = () => {

  // const { user } = useAuth()

  return (
    <AppLayout >
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-gradient">Profile</h1>
            <p className="text-muted-foreground">Manage your profile and achievements.</p>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Profile Information</CardTitle>
                <Button variant="outline" size="icon">
                  <PenLine className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@username" />
                  <AvatarFallback>
                    <UserRound className="h-12 w-12" />
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Username</h3>
                    <p className="text-sm text-muted-foreground">@username</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Bio</p>
                    <p className="text-sm text-muted-foreground">
                      Learning and growing every day. Full-stack developer in training.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </AppLayout>
  )
}

export default ProfilePage