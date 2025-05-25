import AppLayout from "@/layout/AppLayout"
import { useAuth } from "@/store/auth"
import { Card } from "@/components/ui/card"

const ProfilePage = () => {

  const { user } = useAuth()

  return (
    <AppLayout >
      <div>
        user name: {user?.name}
      </div>
      <div>
        user email: {user?.email}
      </div>
      <div>
        user rank: {user?.rank}
      </div>
      <div>
        user agility: {user?.agility}
      </div>
      <div>
        user activeShadows: {user?.activeShadows}
      </div>
      <div>
        user dailyQuestsCompleted: {user?.dailyQuestsCompleted}
      </div>
      <div>
        user level: {user?.level}
      </div>
      <div>
        user mana: {user?.mana}
      </div>
      <div>
        user strength: {user?.strength}
      </div>
      <div>
        user xp: {user?.xp}
      </div>
      <div>
        user _id: {user?._id}
      </div>

    </AppLayout>
  )
}

export default ProfilePage